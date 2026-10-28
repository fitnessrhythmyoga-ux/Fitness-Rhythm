import { useEffect, useRef } from "react"

interface Props {
  className?: string
  opacity?: number
}

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  alpha: number
  maxAlpha: number
}

export default function AmbientCanvas({
  className = "",
  opacity = 0.6,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width =
      canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height =
      canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Generate subtle particles
    const particleCount = Math.min(Math.floor((width * height) / 22000), 40)
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.1,
      maxAlpha: Math.random() * 0.5 + 0.2,
    }))

    // Mouse tracking for subtle parallax
    let targetMouseX = width / 2
    let targetMouseY = height / 2
    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseX = e.clientX - rect.left
      targetMouseY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    const render = () => {
      // Smooth interpolation for mouse position
      mouseX += (targetMouseX - mouseX) * 0.03
      mouseY += (targetMouseY - mouseY) * 0.03

      ctx.clearRect(0, 0, width, height)

      // Draw subtle warm glowing aura ambient blobs
      const auraGradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        20,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.45,
      )
      auraGradient.addColorStop(0, "rgba(243, 241, 236, 0.06)")
      auraGradient.addColorStop(0.5, "rgba(215, 204, 185, 0.03)")
      auraGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = auraGradient
      ctx.fillRect(0, 0, width, height)

      // Render floating particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(243, 241, 236, ${p.alpha})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
      style={{ opacity }}
    />
  )
}
