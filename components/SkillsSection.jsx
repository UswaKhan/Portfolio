// SkillsSection.jsx
// Place this in your Next.js project under components/SkillsSection.jsx

const skills = [
  {
    title: "GoHighLevel",
    description: "Expertise in setting up and configuring CRM systems including pipelines, contact management, tags, custom fields, and automated workflows. I also create campaigns and lead management systems that help businesses organize and nurture their customers effectively.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "N8N",
    description: "Building advanced workflow automation and integrations using n8n. I design multi-step workflows that connect different tools, automate repetitive tasks, and ensure data flows seamlessly across business systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "API Integrations",
    description: "Building integrations between different applications using APIs to automate data exchange and streamline business processes. This enables seamless communication between CRM systems, workflow tools, and business platforms.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Business Tool Integrations",
    description: "Connecting tools like Slack, Notion, and Google Sheets to automate notifications, synchronize data, and improve collaboration across teams.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
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
            Automation Tools & <em className="text-violet-700">Expertise</em>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
            The tools and technologies I use to design efficient CRM systems and build powerful workflow automation solutions that help businesses streamline operations and improve productivity.
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