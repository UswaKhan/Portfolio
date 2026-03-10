// AboutSection.jsx
// Place this in your Next.js project under components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-medium tracking-wider px-5 py-2 rounded-full border border-violet-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
          About Me
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-10"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Passionate About Building <em className="text-violet-700">Smarter Automation Systems </em>
        </h2>

        {/* Bio */}
        <p className="text-xl text-gray-500 font-light leading-relaxed mb-6">
          I&apos;m <span className="text-gray-900 font-medium">Uswa Khan</span>, a Computer Science student with a strong interest in automation and modern business technologies. I enjoy building systems that reduce manual work and simplify business processes.
        </p>
        <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
          My focus is on <span className="text-gray-900 font-medium">CRM automation and workflow integrations</span> using tools like GoHighLevel and n8n to help businesses capture leads, automate follow-ups, and streamline operations.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10" />

        {/* Education + Specialisation row */}
        <div className="flex flex-col sm:flex-row gap-10 w-full justify-center mb-12">

          {/* Education */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-700 font-bold uppercase tracking-widest mb-2">Education</p>
            <p className="text-lg text-gray-900 font-medium">BS Computer Science</p>
            <p className="text-base text-gray-600">University of Engineering & Technology Lahore</p>
          </div>

          <div className="hidden sm:block w-px bg-gray-100" />

          {/* Specialisation */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-700 font-bold uppercase tracking-widest mb-2">Specialisation</p>
            <p className="text-lg text-gray-900 font-medium">CRM & Workflow Automation</p>
            <p className="text-base text-gray-600">GoHighLevel · N8N · Notion · Slack</p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/uswakhan386"
          className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 no-underline"
        >
          Conatct Me →
        </a>

      </div>
    </section>
  );
}