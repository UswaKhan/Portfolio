"use client";

// ContactSection.jsx
// Place this in your Next.js project under components/ContactSection.jsx

const contactMethods = [
  {
    label: "Email",
    value: "uswalohani386@gmail.com",
    href: "mailto:uswalohani386@gmail.com",
    cta: "Send Email",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/uswakhan386",
    href: "https://www.linkedin.com/in/uswakhan386",
    cta: "Connect",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
      </svg>
    ),
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers/uswa",
    href: "https://www.upwork.com/freelancers/~012a9db1aef745e442",
    cta: "Hire Me",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.028v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H.979v7.112c0 3.057 2.484 5.54 5.541 5.54 3.056 0 5.54-2.483 5.54-5.54V9.18c.535 1.115 1.193 2.256 1.986 3.286l-1.684 7.902h2.584l1.224-5.735c1.099.712 2.302 1.127 3.591 1.127 3.057 0 5.541-2.485 5.541-5.541 0-3.057-2.484-5.541-5.541-5.541z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/UswaKhan",
    href: "https://github.com/UswaKhan",
    cta: "View Projects",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 496 512">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  

  return (
    <section id="contact" className="relative bg-violet-50 py-24 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-violet-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-violet-700 text-sm font-medium tracking-wider px-5 py-2 rounded-full border border-violet-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
            Contact
          </div>
          <h2
            className="text-4xl sm:text-5xl text-gray-900 leading-tight tracking-tight mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Let&apos;s Build Something <em className="text-violet-700">Awesome</em> Together
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            I&apos;m always happy to connect! Whether you want to automate your business workflows, integrate tools, or just discuss a project, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {contactMethods.map((method) => (
              <div key={method.label} className="flex items-center justify-between bg-white border border-violet-100 rounded-2xl px-6 py-4 shadow-sm gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-violet-500 font-semibold uppercase tracking-widest mb-0.5">{method.label}</p>
                    <p className="text-sm text-gray-600 font-medium">{method.value}</p>
                  </div>
                </div>
                <a
                  href={method.href}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-sm font-medium text-violet-700 border border-violet-200 px-4 py-2 rounded-full hover:bg-violet-700 hover:text-white transition-all duration-200 no-underline"
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}