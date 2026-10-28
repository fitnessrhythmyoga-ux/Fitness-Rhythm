import React, { useState, useRef } from "react"

interface Card3DProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  badge?: string
  badgeColor?: string
  caption?: string
  onClick?: () => void
  glow?: boolean
  children?: React.ReactNode
}

export default function Card3D({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
  badge,
  badgeColor = "#C2A382",
  caption,
  onClick,
  glow = true,
  children,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max 14 deg tilt angle
    const rX = ((y - centerY) / centerY) * -12
    const rY = ((x - centerX) / centerX) * 12

    setRotateX(rX)
    setRotateY(rY)
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer ${className}`}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Ambient Backlight Glow */}
      {glow && (
        <div
          className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(194,163,130,0.4) 0%, rgba(200,180,150,0.1) 70%, transparent 100%)`,
          }}
        />
      )}

      {/* Main 3D Card Container */}
      <div
        className="relative w-full h-full overflow-hidden rounded-xl bg-[#141414] border border-white/10 shadow-2xl transition-transform duration-200 ease-out"
        style={{
          aspectRatio,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
            isHovered ? 1.03 : 1
          }, ${isHovered ? 1.03 : 1}, 1)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(194, 163, 130, 0.2)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Real Photo */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${isHovered ? 1.08 : 1})`,
          }}
        />

        {/* Glare Sheen Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)`,
          }}
        />

        {/* Animatic Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
            opacity: isHovered ? 0.95 : 0.6,
          }}
        />

        {/* Floating 3D Depth Badge */}
        {badge && (
          <div
            className="absolute top-4 left-4 z-20 transition-transform duration-300 ease-out"
            style={{
              transform: `translateZ(30px) ${
                isHovered ? "scale(1.05)" : "scale(1)"
              }`,
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6rem] font-label tracking-widest backdrop-blur-md border shadow-lg"
              style={{
                backgroundColor: "rgba(13, 13, 13, 0.65)",
                borderColor: `${badgeColor}55`,
                color: "#F3F1EC",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: badgeColor }}
              />
              {badge.toUpperCase()}
            </span>
          </div>
        )}

        {/* Floating 3D Caption & Content Layer */}
        {(caption || children) && (
          <div
            className="absolute bottom-0 inset-x-0 p-6 z-20 transition-transform duration-300 ease-out"
            style={{
              transform: "translateZ(25px)",
            }}
          >
            {caption && (
              <p className="font-label text-[#F3F1EC] text-[0.68rem] tracking-[0.18em] opacity-90 drop-shadow-md">
                {caption.toUpperCase()}
              </p>
            )}
            {children}
          </div>
        )}

        {/* Subtle Animatic Border Highlight */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none border transition-colors duration-500 z-30"
          style={{
            borderColor: isHovered
              ? `${badgeColor}88`
              : "rgba(255,255,255,0.08)",
          }}
        />
      </div>
    </div>
  )
}
