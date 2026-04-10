// SkillsSection.jsx
// Place this in your Next.js project under components/SkillsSection.jsx

const skills = [
  {
    title: "Frontend Development",
    description: "Building fast, responsive, and visually polished interfaces using React.js and Next.js. I implement Tailwind CSS for clean, consistent styling and Framer Motion for smooth animations and page transitions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description: "Designing and building production-grade REST APIs with FastAPI and Python. Database modelling with PostgreSQL and Supabase, Alembic migrations, and JWT-based authentication for secure, scalable systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
  },
  {
    title: "AI & LLM Integration",
    description: "Integrating Claude AI and other large language models into real products. I build intelligent recommendation systems, automated insight engines, and AI-powered features that go beyond simple chatbots.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Dev Tools & Workflow",
    description: "Managing codebases with Git and GitHub, building with AI-assisted tools like Claude Code and Opencode, and following the BMAD spec-driven development method for structured, high-quality software delivery.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-violet-50 py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-violet-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-violet-700 text-sm font-medium tracking-wider px-5 py-2 rounded-full border border-violet-200 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
            Skills & Technologies
          </div>
          <h2
            className="text-4xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            My Tech <em className="text-violet-700">Stack</em>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
            The tools and technologies I use to build full-stack web applications, integrate AI, and ship production-ready products that solve real business problems.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-violet-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300">
                {skill.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-500 font-light leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}