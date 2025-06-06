import React from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import { motion } from "framer-motion";
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

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4">
            <a
              href="/Resume-Inemesit-Akpan.pdf"
              download
              className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition text-sm shadow w-full sm:w-auto"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="https://calendly.com/zubplug/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm shadow w-full sm:w-auto"
            >
              Book a Call on Calendly
            </a>
          </div>
        </header>

{/* === About Me === */}
<section className="mb-20 max-w-4xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-6 text-center">👤 About Me</h2>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white shadow-md rounded-2xl p-6 md:p-10 border border-gray-200"
  >
    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
      I'm <strong>Inemesit Joseph Akpan</strong>, a multi-disciplinary problem solver with a passion for systems,
      strategy, and scalability. As a <strong>full-stack developer</strong>, I specialize in building responsive
      web platforms using <span className="text-purple-700 font-medium">Laravel</span>,
      <span className="text-purple-700 font-medium"> React</span>, and modern APIs, with a focus on usability,
      security, and performance.
    </p>

    <p className="text-gray-800 text-base md:text-lg mt-5 leading-relaxed">
      With a background in <strong>accounting and compliance consulting</strong>, I bring financial insight to
      every project—streamlining operations, automating reporting, and ensuring regulatory readiness.
      I'm also a <strong>forex strategist</strong> and certified <strong>life coach</strong>,
      mentoring individuals and startups toward clarity, structure, and growth.
    </p>

    <p className="text-gray-800 text-base md:text-lg mt-5 leading-relaxed">
      Whether you're a founder, team, or solo entrepreneur, I help you build what matters—technically,
      financially, and personally. Let’s create something powerful together.
    </p>

    <div className="mt-6 text-center">
      <a
        href="#contact"
        className="inline-block px-6 py-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium rounded-full shadow transition"
      >
        Let's Connect
      </a>
    </div>
  </motion.div>
</section>

        {/* === What I Offer === */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">🎯 What I Offer</h2>
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <div className="bg-white border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">💻 Full-Stack Development</h3>
              <p className="text-sm text-gray-600">
                Scalable web apps & API integrations using Laravel, React, Tailwind, and Node.js.
              </p>
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">📊 Business & Compliance Strategy</h3>
              <p className="text-sm text-gray-600">
                Support for CAC, NIMC, PENCOM, SME accounting, and operational workflow design.
              </p>
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">💱 Forex Strategy & Mentorship</h3>
              <p className="text-sm text-gray-600">
                Technical analysis, automated trading bots, signal building, and coaching.
              </p>
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">🧠 Coaching & Digital Growth</h3>
              <p className="text-sm text-gray-600">
                Business clarity, life goals, and structured coaching for entrepreneurs and teams.
              </p>
            </div>
          </div>
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
            {[{
              title: "Zubplug (Live)",
              description: "A platform offering identity services, payments, compliance, and health tools.",
              link: "https://zubplug.com.ng",
              icon: <FaGlobe />,
              label: "Visit Live Site",
            }, {
              title: "Zubplug Backend (Laravel API)",
              description: "Robust backend for wallet, KYC, VTU, health, and marketplace logic.",
              link: null,
              label: "Private Repo – Request Access",
            }, {
              title: "Zubplug Frontend (React + Tailwind)",
              description: "Modern frontend with dashboards, booking flow, partner/admin UI.",
              link: null,
              label: "Private Repo – Request Access",
            }].map((p, i) => (
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

        {/* === Testimonials === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-center">💬 Testimonials</h2>
          <Slider {...sliderSettings}>
            {[
              {
                quote: "Inemesit built a complete platform from scratch and integrated all services beautifully. His skill and attention to detail are top-notch.",
                author: "— Project Client, Abuja",
              },
              {
                quote: "He delivers scalable systems that just work — from backend logic to clean UI. Highly recommended for fintech and health platforms.",
                author: "— Partner Developer, Lagos",
              },
              {
                quote: "He's not just a developer — he understands strategy, business, and user flows. A rare combination of tech + business insight.",
                author: "— Business Partner, UK",
              },
              {
                quote: "Our SME struggled with manual records. Inemesit automated our reports and dashboards — now our team works smarter.",
                author: "— Logistics Founder, PH",
              },
              {
                quote: "I got my first forex payout after working with him. Great coach and even greater person.",
                author: "— Forex Student, Nigeria",
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

        {/* === Contact === */}
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
              Available for freelance, consulting, full-time roles, and mentorship collaborations.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
