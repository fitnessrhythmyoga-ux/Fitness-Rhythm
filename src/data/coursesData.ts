export interface CourseItem {
  id: string
  title: string
  subtitle: string
  instructor: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  price: string
  status: "upcoming" | "enquire" | "active"
  image: string
  overview: string
  whatYouWillLearn: string[]
  curriculum: { week: string; title: string; description: string }[]
  whoIsThisFor: string[]
  schedule: string
  location: string
}

export const COURSES_DATA: CourseItem[] = [
  {
    id: "yoga-foundations",
    title: "Yoga Foundations",
    subtitle: "Build a solid physical & mindful posture baseline",
    instructor: "Fitness & Rhythm Senior Faculty",
    duration: "Coming Soon",
    level: "Beginner",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0242.webp",
    overview:
      "A structured program designed for beginners and practitioners looking to refine their alignment, breath mechanics, and foundational postures with precision and confidence.",
    whatYouWillLearn: [
      "Fundamental Hatha & Vinyasa posture mechanics and safe alignment",
      "Diaphragmatic breathwork (Pranayama) techniques for stress release",
      "Core activation, balance stability, and spinal hygiene",
      "Establishing a sustainable home practice routine",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Breath & Posture Alignment",
        description:
          "Understanding spinal alignment, grounding, and basic standing postures.",
      },
      {
        week: "Week 2",
        title: "Core Strength & Balance",
        description:
          "Exploring tree pose, warrior sequences, and stabilizing deep core muscles.",
      },
      {
        week: "Week 3",
        title: "Hip Openers & Spinal Mobility",
        description:
          "Releasing lower back tension and enhancing hip joint range of motion.",
      },
      {
        week: "Week 4",
        title: "Integration & Meditative Flow",
        description:
          "Combining breathwork, sun salutations, and guided relaxation into a seamless practice.",
      },
    ],
    whoIsThisFor: [
      "Absolute beginners wanting expert step-by-step guidance",
      "Intermediate practitioners seeking alignment refinement",
      "Anyone recovering from sedentary stress looking for mindful movement",
    ],
    schedule: "Mon / Wed / Fri — 7:00 AM & 6:00 PM batches",
    location: "Fitness & Rhythm Studio, Indore",
  },
  {
    id: "21-day-wellness-journey",
    title: "21-Day Wellness Journey",
    subtitle: "Holistic habit transformation for body, breath & mind",
    instructor: "Master Instructor & Wellness Coach",
    duration: "Coming Soon",
    level: "All Levels",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0243.webp",
    overview:
      "Immerse yourself in a transformative guided journey combining daily morning movement, evening breathwork, stress reduction protocols, and mindful lifestyle guidance.",
    whatYouWillLearn: [
      "Daily morning movement rituals to boost vitality and immunity",
      "Evening wind-down breathwork for restorative sleep",
      "Mindful nutrition and posture awareness techniques",
      "Mental clarity exercises for reducing anxiety",
    ],
    curriculum: [
      {
        week: "Days 1-7",
        title: "Detox & Awakening",
        description:
          "Gentle morning flows and breath purification to cleanse physical fatigue.",
      },
      {
        week: "Days 8-14",
        title: "Building Stamina & Inner Strength",
        description:
          "Vinyasa flows paired with nervous system regulation practices.",
      },
      {
        week: "Days 15-21",
        title: "Sustained Harmony & Mindful Mastery",
        description:
          "Integrating meditation, body awareness, and long-term habits.",
      },
    ],
    whoIsThisFor: [
      "Busy professionals seeking stress resilience and energy restoration",
      "Anyone looking to establish a daily mindfulness habit",
      "Fitness enthusiasts wanting balanced recovery",
    ],
    schedule: "Daily Morning Batch — 6:30 AM",
    location: "Fitness & Rhythm Studio + Online Live Stream",
  },
  {
    id: "flexibility-mobility-program",
    title: "Flexibility & Mobility Program",
    subtitle: "Unlock joint freedom, posture balance & muscle elongation",
    instructor: "Functional Movement Specialist",
    duration: "Coming Soon",
    level: "Intermediate",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0244.webp",
    overview:
      "A specialized program combining PNF stretching, fascia release, and yogic posture hold mechanics to increase functional flexibility and eliminate tight hamstrings, shoulders, and hips.",
    whatYouWillLearn: [
      "Active vs Passive stretching techniques for joint longevity",
      "Fascial release methods to alleviate chronic muscle tightness",
      "Hamstring, hip flexor, and shoulder mobility progressions",
      "Preventing common movement injuries",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "Lower Body Unlocking",
        description: "Targeting tight hips, hamstrings, and ankles.",
      },
      {
        week: "Week 3-4",
        title: "Spine & Shoulder Openers",
        description:
          "Improving thoracic extension, posture, and upper body flexibility.",
      },
      {
        week: "Week 5-6",
        title: "Full Body Dynamic Flow",
        description:
          "Connecting joint range of motion into fluid, strong movement sequences.",
      },
    ],
    whoIsThisFor: [
      "Athletes, desk workers, and practitioners with tight hamstrings/hips",
      "Anyone wanting to improve posture and prevent joint stiffness",
    ],
    schedule: "Tue / Thu / Sat — 5:30 PM",
    location: "Fitness & Rhythm Studio, Indore",
  },
  {
    id: "mindfulness-meditation",
    title: "Mindfulness & Meditation",
    subtitle: "Master mental stillness, deep relaxation & focus",
    instructor: "Mindfulness Lead",
    duration: "Coming Soon",
    level: "All Levels",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0239.webp",
    overview:
      "Learn ancient Vedic breathwork and modern mindfulness meditation tools designed to quiet a chaotic mind, improve deep focus, and cultivate lasting internal stillness.",
    whatYouWillLearn: [
      "Pranayama techniques (Nadi Shodhana, Kapalabhati, Ujjayi)",
      "Yoga Nidra for deep restorative relaxation",
      "Observing thoughts without emotional reactivity",
      "Integrating mindful presence into daily decision-making",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Breath Control & Body Scanning",
        description:
          "Mastering breath rhythms and systematic muscle relaxation.",
      },
      {
        week: "Week 2",
        title: "Stillness & Mindful Awareness",
        description:
          "Silent meditation sessions and Yoga Nidra deep rest techniques.",
      },
    ],
    whoIsThisFor: [
      "Anyone dealing with high stress, mental fatigue, or insomnia",
      "Practitioners wanting to deepen their spiritual and meditative experience",
    ],
    schedule: "Mon / Wed / Fri — 7:30 PM",
    location: "Fitness & Rhythm Sanctuary, Indore",
  },
  {
    id: "advanced-yoga-program",
    title: "Advanced Yoga Program",
    subtitle: "Master inversions, complex transitions & deep holds",
    instructor: "Senior Ashtanga & Vinyasa Master",
    duration: "Coming Soon",
    level: "Advanced",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0246.webp",
    overview:
      "Elevate your practice to master level. Focus on inversions (headstands, handstands, arm balances), advanced backbends, and energetic bandha locks.",
    whatYouWillLearn: [
      "Arm balance progressions (Crow, Peacock, Firefly)",
      "Inversion conditioning, wall drills, and freestanding handstands",
      "Deep backbending with safe lumbar protection",
      "Energy locks (Bandhas) and advanced breath control",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "Core Strength & Arm Balances",
        description:
          "Building wrist, shoulder, and core stability for balances.",
      },
      {
        week: "Week 3-4",
        title: "Inversion Foundations",
        description: "Headstand, forearm stand, and handstand drill mechanics.",
      },
      {
        week: "Week 5-6",
        title: "Deep Backbends & Heart Openers",
        description: "Wheel pose variations and spinal articulation.",
      },
      {
        week: "Week 7-8",
        title: "Mastery Flow & Integration",
        description:
          "Dynamic advanced vinyasa transitions and deep meditative holding.",
      },
    ],
    whoIsThisFor: [
      "Experienced practitioners with at least 1-2 years of consistent practice",
      "Yoga teachers seeking advanced skill refinement",
    ],
    schedule: "Mon / Wed / Sat — 6:00 AM",
    location: "Fitness & Rhythm Studio, Indore",
  },
  {
    id: "teacher-training",
    title: "Teacher Training Program",
    subtitle: "Comprehensive 200-Hour Yoga Teacher Certification",
    instructor: "Master Instructors & Guest Experts",
    duration: "Coming Soon",
    level: "Advanced",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0247.webp",
    overview:
      "A transformative 200-hour certified Yoga Teacher Training (YTT) covering anatomy, sequencing, adjustment art, yogic philosophy, and practical teaching experience.",
    whatYouWillLearn: [
      "Anatomy, kinesiology, and biomechanics of yoga asanas",
      "Art of verbal cueing, physical hands-on adjustments, and sequencing",
      "Patanjali Yoga Sutras, Bhagavad Gita, and yogic philosophy",
      "Classroom management, student psychology, and studio ethics",
    ],
    curriculum: [
      {
        week: "Month 1",
        title: "Anatomy & Asana Alignment",
        description:
          "Deconstructing 50+ core poses, safe modification, and musculoskeletal dynamics.",
      },
      {
        week: "Month 2",
        title: "Pranayama, Philosophy & Cueing",
        description:
          "Deep breathwork study, ancient texts, and effective teaching methodologies.",
      },
      {
        week: "Month 3",
        title: "Teaching Practicum & Certification",
        description:
          "Leading live student sessions, practical evaluation, and graduation.",
      },
    ],
    whoIsThisFor: [
      "Aspiring yoga instructors seeking international certification",
      "Dedicated students wanting deep knowledge of yoga science and philosophy",
    ],
    schedule: "Weekend Intensive Batches (Sat & Sun Full Days)",
    location: "Fitness & Rhythm Studio, Indore",
  },
  {
    id: "personal-wellness-program",
    title: "Personalized 1-on-1 Wellness Program",
    subtitle: "Tailored private instruction for your specific goals",
    instructor: "Dedicated Lead Instructor",
    duration: "Coming Soon",
    level: "All Levels",
    price: "Coming Soon",
    status: "upcoming",
    image: "/images/img_0240.webp",
    overview:
      "Bespoke private sessions tailored to your individual physical condition, health goals, schedule, and lifestyle requirements.",
    whatYouWillLearn: [
      "Custom pose modifications based on your physical posture assessment",
      "Personalized stress-management and breathing routines",
      "One-on-one progress tracking and postural corrections",
    ],
    curriculum: [
      {
        week: "Phase 1",
        title: "Assessment & Custom Blueprint",
        description: "Comprehensive physical mobility and wellness assessment.",
      },
      {
        week: "Phase 2",
        title: "Targeted Private Training",
        description:
          "Weekly 1-on-1 private studio sessions focusing on your goals.",
      },
      {
        week: "Phase 3",
        title: "Long-term Maintenance Plan",
        description: "Self-sustaining routine for home and travel.",
      },
    ],
    whoIsThisFor: [
      "Individuals with specific posture/back health conditions",
      "High-profile leaders needing flexible private scheduling",
      "Beginners wanting 100% focused personal guidance before joining group sessions",
    ],
    schedule: "Flexible timing by appointment",
    location: "In-Studio Private Suite or Home Visit in Indore",
  },
]
