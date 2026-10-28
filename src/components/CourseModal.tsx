import { useState, useEffect } from "react"
import type { CourseItem } from "../data/coursesData"

interface Props {
  course: CourseItem | null
  onClose: () => void
  onOpenWaitlist: (courseTitle: string) => void
}

export default function CourseModal({
  course,
  onClose,
  onOpenWaitlist,
}: Props) {
  const [activeTab, setActiveTab] =
    useState<"overview" | "curriculum" | "audience">("overview")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (course) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [course, onClose])

  if (!course) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-500"
      style={{
        backgroundColor: "rgba(13, 13, 13, 0.88)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#F3F1EC] text-[#0D0D0D] overflow-y-auto rounded-none shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10"
            style={{
              background:
                "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 70%)",
            }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-label text-[0.55rem] tracking-[0.2em] bg-[#F3F1EC] text-[#0D0D0D] px-3 py-1 uppercase">
                {course.level}
              </span>
              <span className="font-label text-[0.55rem] tracking-[0.2em] text-[#F3F1EC] opacity-80 uppercase">
                {course.duration}
              </span>
            </div>
            <h2
              id="course-modal-title"
              className="font-display text-[#F3F1EC] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {course.title}
            </h2>
            <p className="font-label text-[#F3F1EC] opacity-75 text-[0.68rem] tracking-[0.1em] mt-2">
              {course.subtitle.toUpperCase()}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-[#0D0D0D] text-[#F3F1EC] hover:opacity-75 transition-opacity duration-300 rounded-full"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="border-b border-[#0D0D0D] border-opacity-15 px-6 sm:px-10 flex gap-8 pt-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`font-label text-[0.65rem] tracking-[0.18em] py-4 border-b-2 transition-colors duration-300 ${
              activeTab === "overview"
                ? "border-[#0D0D0D] text-[#0D0D0D] font-medium"
                : "border-transparent text-[#0D0D0D] opacity-40 hover:opacity-80"
            }`}
          >
            OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`font-label text-[0.65rem] tracking-[0.18em] py-4 border-b-2 transition-colors duration-300 ${
              activeTab === "curriculum"
                ? "border-[#0D0D0D] text-[#0D0D0D] font-medium"
                : "border-transparent text-[#0D0D0D] opacity-40 hover:opacity-80"
            }`}
          >
            CURRICULUM
          </button>
          <button
            onClick={() => setActiveTab("audience")}
            className={`font-label text-[0.65rem] tracking-[0.18em] py-4 border-b-2 transition-colors duration-300 ${
              activeTab === "audience"
                ? "border-[#0D0D0D] text-[#0D0D0D] font-medium"
                : "border-transparent text-[#0D0D0D] opacity-40 hover:opacity-80"
            }`}
          >
            WHO IT'S FOR
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 flex-grow">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-2">
                  ABOUT THE PROGRAM
                </p>
                <p
                  className="font-label text-[#0D0D0D] leading-relaxed text-[0.75rem] opacity-80"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {course.overview}
                </p>
              </div>

              <div>
                <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-4">
                  KEY LEARNING OUTCOMES
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xs text-[#0D0D0D] mt-0.5">✦</span>
                      <span className="font-label text-[#0D0D0D] opacity-75 text-[0.68rem] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#0D0D0D] border-opacity-10">
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-1">
                    INSTRUCTOR
                  </p>
                  <p className="font-label text-[#0D0D0D] text-[0.7rem]">
                    {course.instructor.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-1">
                    SCHEDULE &amp; BATCH
                  </p>
                  <p className="font-label text-[#0D0D0D] text-[0.7rem]">
                    {course.schedule.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-1">
                    LOCATION
                  </p>
                  <p className="font-label text-[#0D0D0D] text-[0.7rem]">
                    {course.location.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem] mb-1">
                    INVESTMENT
                  </p>
                  <p className="font-label text-[#0D0D0D] text-[0.7rem]">
                    {course.price.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div className="space-y-6">
              <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem]">
                SYLLABUS BREAKDOWN
              </p>
              <div className="space-y-4">
                {course.curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="border border-[#0D0D0D] border-opacity-15 p-5 bg-white/40"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label text-[0.6rem] tracking-[0.18em] text-[#0D0D0D] opacity-50">
                        {module.week.toUpperCase()}
                      </span>
                      <span className="font-display text-[#0D0D0D] text-lg">
                        {module.title}
                      </span>
                    </div>
                    <p className="font-label text-[#0D0D0D] opacity-70 text-[0.68rem] leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "audience" && (
            <div className="space-y-6">
              <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem]">
                WHO SHOULD ENROLL
              </p>
              <div className="space-y-3">
                {course.whoIsThisFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 border border-[#0D0D0D] border-opacity-10 bg-white/30"
                  >
                    <span className="font-label text-[0.65rem] opacity-50 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="font-label text-[#0D0D0D] opacity-80 text-[0.7rem] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="border-t border-[#0D0D0D] border-opacity-15 p-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#EAE7DF]">
          <div>
            <p className="font-label text-[#0D0D0D] opacity-40 text-[0.58rem]">
              STATUS
            </p>
            <p className="font-label text-[#0D0D0D] text-[0.7rem] tracking-wider">
              {course.status === "enquire"
                ? "OPEN FOR PRIVATE ENQUIRIES"
                : "ENROLLMENT WAITLIST OPEN"}
            </p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none font-label text-[#0D0D0D] text-[0.65rem] tracking-[0.18em] border border-[#0D0D0D] px-6 py-3.5 hover:bg-[#0D0D0D] hover:text-[#F3F1EC] transition-all duration-400"
            >
              CLOSE
            </button>
            <button
              onClick={() => {
                onClose()
                onOpenWaitlist(course.title)
              }}
              className="flex-1 sm:flex-none font-label bg-[#0D0D0D] text-[#F3F1EC] text-[0.65rem] tracking-[0.18em] px-8 py-3.5 hover:opacity-85 transition-opacity duration-400"
            >
              {course.status === "enquire" ? "ENQUIRE NOW" : "JOIN WAITLIST"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
