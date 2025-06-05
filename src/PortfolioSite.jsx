import React from "react";
import { FaGithub, FaEnvelope, FaDownload, FaGlobe, FaTools } from "react-icons/fa";

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-10 md:px-16 lg:px-32 font-sans">
      {/* === Profile Header === */}
      <header className="mb-16 text-center">
        <img
          src="/profile.png"
          alt="Inemesit Joseph Akpan"
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Inemesit Joseph Akpan</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Full-Stack Developer & Technical Consultant · Laravel · React · Node.js · MySQL · APIs
        </p>

        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          <a
            href="mailto:zubplug@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 transition"
          >
            <FaEnvelope /> zubplug@gmail.com
          </a>
          <a
            href="https://github.com/Zubplug"
            className="flex items-center gap-2 text-gray-800 hover:underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> @Zubplug
          </a>
        </div>

        <div className="mt-6">
          <a
            href="/Resume-Inemesit-Akpan.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition text-sm shadow"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </header>

      {/* === Skills Section === */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
          <FaTools /> Tech Stack
        </h2>
        <p className="text-gray-600 mb-4">Languages, Tools & Frameworks I work with:</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-800 font-medium">
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Laravel</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">React.js</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Tailwind CSS</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Node.js</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">MySQL</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">API Integration</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Git</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Sanctum Auth</span>
          <span className="bg-white border px-3 py-1 rounded shadow-sm">Monnify / Flutterwave</span>
        </div>
      </section>

      {/* === Projects Section === */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">🌟 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Zubplug (Live)",
              description:
                "A digital services platform offering payments, identity services, collective buying, and medical bookings.",
              link: "https://zubplug.com.ng",
              icon: <FaGlobe />,
              label: "Visit Live Site",
            },
            {
              title: "Zubplug Backend (Laravel API)",
              description:
                "Role-based API handling wallet, VTU, compliance, health bookings, and escrow logic.",
              link: "https://github.com/Zubplug/ineplug-backend",
              label: "View on GitHub →",
            },
            {
              title: "Zubplug Frontend (React + Tailwind)",
              description:
                "Mobile-first UI with dashboards, VTU services, booking and KYC flows.",
              link: "https://github.com/Zubplug/ineplug-frontend",
              label: "View on GitHub →",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow hover:shadow-md transition p-5"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline flex items-center gap-1"
              >
                {project.icon} {project.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* === Achievements Section === */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">🏆 Achievements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Founder & Lead Developer at Zubplug Digital Integrated Services Limited</li>
          <li>Integrated 5+ payment APIs (Monnify, Flutterwave, Nomba, Paystack, etc.)</li>
          <li>Designed modular systems for e-commerce, KYC, bookings, and compliance</li>
          <li>Built real-time dashboards for users, admins, partners, and vendors</li>
        </ul>
      </section>

      {/* === Testimonials Section === */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">💬 Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="bg-white p-4 border-l-4 border-blue-600 shadow-sm rounded-md">
            <p className="text-gray-700 italic">
              “Inemesit built a complete platform from scratch and integrated all services beautifully. His skill and attention to detail are top-notch.”
            </p>
            <footer className="mt-2 text-sm text-gray-500">— Project Client, Abuja</footer>
          </blockquote>
          <blockquote className="bg-white p-4 border-l-4 border-purple-600 shadow-sm rounded-md">
            <p className="text-gray-700 italic">
              “He delivers scalable systems that just work — from backend logic to clean UI. Highly recommended for fintech and health platforms.”
            </p>
            <footer className="mt-2 text-sm text-gray-500">— Partner Developer, Lagos</footer>
          </blockquote>
        </div>
      </section>

      {/* === CTA Footer === */}
      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        &copy; {new Date().getFullYear()} Inemesit Joseph Akpan · All rights reserved.
        <div className="mt-4">
          <span className="text-gray-700">Open to freelance, remote jobs & technical partnerships</span>
        </div>
      </footer>
    </main>
  );
}
