// ServicesSection.jsx
// Place this in your Next.js project under components/ServicesSection.jsx

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development using Next.js, React, and FastAPI. I handle everything from database architecture to responsive frontend UI — delivering production-ready products built to scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Integration & Development",
    description:
      "Integrate large language models like Claude into your existing product or build AI-native features from scratch — recommendation engines, intelligent alerts, and automated analysis that adds real value.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Backend API Development",
    description:
      "Fast, secure, and scalable REST APIs built with FastAPI and Python. Database design with PostgreSQL and Supabase, authentication, and third-party integrations handled cleanly and efficiently.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Custom Software for Businesses",
    description:
      "Got a business problem that needs a custom-built solution? I scope, design, and ship software tailored to your exact needs — on time and production-ready from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-medium tracking-wider px-5 py-2 rounded-full border border-violet-200 mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
            Services
          </div>
          <h2
            className="text-4xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Services for <em className="text-violet-700">Modern Businesses</em>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
            I help businesses design and build powerful web applications and AI-powered tools — from full-stack product development to intelligent automation that saves time and drives growth.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex-1 group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300">
                  {service.icon}
                </div>
                <span
                  className="text-5xl font-bold text-gray-100 group-hover:text-violet-100 transition-colors duration-300 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl text-gray-900 mb-3 leading-snug"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-500 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:gap-3 transition-all duration-200 no-underline"
              >
                Get Started <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}