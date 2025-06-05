import React from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaEnvelope, FaDownload, FaGlobe, FaTools } from "react-icons/fa";

export default function PortfolioSite() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <>
      <Helmet>
        <title>Inemesit Joseph Akpan – Full Stack Dev, Consultant & Life Coach</title>
        <meta
          name="description"
          content="Inemesit Akpan – Full-stack developer, accountant, business consultant, forex trader, and life coach. Available for projects, consulting, and coaching."
        />
      </Helmet>

      <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-10 md:px-16 lg:px-32 font-sans">
        {/* === Header === */}
        <header className="mb-16 text-center">
          <img
            src="/profile.png"
            alt="Inemesit Joseph Akpan"
            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Inemesit Joseph Akpan</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Certified Accountant",
                "Business Consultant",
                "Forex Strategist",
                "Life Coach & Mentor",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
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

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/Resume-Inemesit-Akpan.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition text-sm shadow"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="https://calendly.com/zubplug/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm shadow"
            >
              Book a Call on Calendly
            </a>
          </div>
        </header>

        {/* === About === */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">👋 About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a passionate problem solver with a cross-functional background — a full-stack
            developer fluent in Laravel & React, a certified accountant, business consultant, and
            forex trader. Whether you're building a fintech app, optimizing systems, or launching
            a coaching brand, I help bring structure, scalability, and real-world impact.
          </p>
        </section>

        {/* === What I Offer === */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">🎯 What I Offer</h2>
          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>✅ Web apps & API integrations (React, Laravel, Tailwind)</li>
            <li>✅ Business & compliance strategy for startups & SMEs</li>
            <li>✅ Forex automation & mentorship for financial independence</li>
            <li>✅ Coaching programs and digital products launch support</li>
          </ul>
        </section>

        {/* === Tech Stack === */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
            <FaTools /> Tech Stack
          </h2>
          <p className="text-gray-600 mb-4">Languages, Tools & Frameworks I work with:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-800 font-medium">
            {[
              "Laravel",
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "MySQL",
              "API Integration",
              "Git",
              "Sanctum Auth",
              "Monnify / Flutterwave",
            ].map((tech, i) => (
              <span key={i} className="bg-white border px-3 py-1 rounded shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* === Projects === */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">🌟 Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Zubplug (Live)",
                description:
                  "A platform offering payments, identity, collective buying, and health services.",
                link: "https://zubplug.com.ng",
                icon: <FaGlobe />,
                label: "Visit Live Site",
              },
              {
                title: "Zubplug Backend (Laravel API)",
                description:
                  "Handles wallet, VTU, compliance, health, and escrow for users & partners.",
                link: null,
                label: "Private Repo – Request Demo",
              },
              {
                title: "Zubplug Frontend (React + Tailwind)",
                description:
                  "Modern UI with dashboards, VTU tools, KYC, health booking, and marketplace.",
                link: null,
                label: "Private Repo – Access on Request",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg hover:scale-[1.02] transition-all p-5"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-base text-gray-600 mb-3 leading-relaxed">{p.description}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline flex items-center gap-1"
                  >
                    {p.icon} {p.label}
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 italic">🔒 {p.label}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* === Testimonials Slider === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-center">💬 Testimonials</h2>
          <Slider {...sliderSettings}>
            {[
              {
                quote:
                  "Inemesit built a complete platform from scratch and integrated all services beautifully. His skill and attention to detail are top-notch.",
                author: "— Project Client, Abuja",
              },
              {
                quote:
                  "He delivers scalable systems that just work — from backend logic to clean UI. Highly recommended for fintech and health platforms.",
                author: "— Partner Developer, Lagos",
              },
              {
                quote:
                  "He's not just a developer — he understands strategy, business, and user flows. A rare combination of tech + business insight.",
                author: "— Business Partner, UK",
              },
            ].map((item, i) => (
              <div key={i} className="px-4">
                <blockquote className="bg-white p-4 border-l-4 border-blue-600 shadow rounded-md max-w-2xl mx-auto">
                  <p className="text-gray-700 italic mb-2">{item.quote}</p>
                  <footer className="text-sm text-gray-500">{item.author}</footer>
                </blockquote>
              </div>
            ))}
          </Slider>
        </section>

        {/* === Contact Form === */}
        <section className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">📬 Contact Me Directly</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded shadow-sm"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded shadow-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* === Footer === */}
        <footer className="text-center text-sm text-gray-500 border-t pt-6">
          &copy; {new Date().getFullYear()} Inemesit Joseph Akpan · All rights reserved.
          <div className="mt-4">
            <span className="text-gray-700">
              Available for full-time roles, freelance projects, mentorship, and partnerships.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
