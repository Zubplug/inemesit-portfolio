import React from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaTools,
  FaArrowRight,
  FaChartLine,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
  FaCrown,
  FaDatabase,
  FaCloud,
  FaHandshake,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Responsive UI Architecture",
      "Progressive Web Apps",
      "Design Systems",
    ],
  },
  {
    title: "Backend & API Systems",
    skills: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "REST API Design",
      "API Security",
      "Laravel Sanctum",
      "Payment Integrations",
      "Webhook Orchestration",
      "Queue Jobs & Background Tasks",
    ],
  },
  {
    title: "Mobile & Cross Platform",
    skills: [
      "Flutter",
      "Dart",
      "State Management",
      "Mobile Auth Flows",
      "Offline-Ready UX",
      "Mobile Performance Tuning",
      "App Deployment Pipeline",
    ],
  },
  {
    title: "Data, Cloud & Operations",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux Server Ops",
      "Git & CI/CD",
      "Deployment Automation",
      "Monitoring & Logs",
      "Technical Documentation",
      "Team Collaboration",
    ],
  },
];

const featuredProjects = [
  {
    title: "Assetkore Mobile App",
    type: "Flutter + Dart",
    description:
      "Consumer mobile experience for registration, policy management, asset reporting, and secure user workflows.",
    icon: <FaMobileAlt />,
    status: "Production Build",
  },
  {
    title: "Assetkore Business App",
    type: "Flutter (Business Suite)",
    description:
      "Business-facing dashboard and operations module for enterprise asset visibility, reporting, and staff workflow coordination.",
    icon: <FaChartLine />,
    status: "Active Product",
  },
  {
    title: "Assetkore Web App",
    type: "React + Tailwind",
    description:
      "Modern web platform for authentication, profile setup, and customer operations with a clean, scalable frontend architecture.",
    icon: <FaGlobe />,
    status: "Live Workstream",
  },
  {
    title: "Assetkore Backend API",
    type: "Laravel + MySQL",
    description:
      "Core API services powering auth, user management, integrations, role-based access, and data exchange across Assetkore channels.",
    icon: <FaServer />,
    status: "In Use",
  },
  {
    title: "Zubplug Platform",
    type: "Full-Stack Platform",
    description:
      "A multi-service platform covering identity services, payments, compliance workflows, and user-facing utility systems.",
    icon: <FaCode />,
    status: "Live",
    link: "https://zubplug.com.ng",
  },
  {
    title: "Automation & Integration Work",
    type: "Systems Engineering",
    description:
      "Business automation implementations, reporting pipelines, and third-party service integrations across fintech and operations products.",
    icon: <FaTools />,
    status: "Delivered",
  },
];

const testimonials = [
  {
    quote:
      "Inemesit combines product thinking with deep engineering execution. We moved from ideas to stable releases faster than expected.",
    author: "Product Stakeholder",
  },
  {
    quote:
      "He architected backend and frontend layers with clean structure, then aligned them with business goals and timelines.",
    author: "Technical Partner",
  },
  {
    quote:
      "Rare mix of technical leadership, design sensitivity, and business insight. The quality feels world-class.",
    author: "Operations Lead",
  },
];

const impactHighlights = [
  { label: "Fintech Transactions", value: "50,000+" },
  { label: "Service Uptime", value: "99.9%" },
  { label: "API Latency Gain", value: "~40%" },
  { label: "Ecosystem Scope", value: "Web + Mobile + API" },
];

const roleFit = [
  {
    title: "Senior Frontend Engineer",
    icon: <FaBolt />,
    text: "Owns React architecture, UI systems, and performance for product experiences that convert.",
  },
  {
    title: "Full-Stack Engineer",
    icon: <FaShieldAlt />,
    text: "Builds secure backend services and scalable APIs, then ships polished frontend and mobile clients.",
  },
  {
    title: "Product Engineer",
    icon: <FaUsers />,
    text: "Bridges product, design, and engineering to deliver features tied to business outcomes.",
  },
  {
    title: "Technical Consultant",
    icon: <FaBriefcase />,
    text: "Improves existing systems, unblocks critical delivery, and structures maintainable roadmaps.",
  },
];

const deliverySteps = [
  "Understand business goal and delivery constraints.",
  "Design lean architecture and implementation plan.",
  "Ship in fast milestones with clear visibility.",
  "Harden performance, quality, and handoff documentation.",
];

const portfolioGroups = [
  {
    heading: "Zubplug Platform",
    subtitle: "Fintech & Service Ecosystem",
    links: [
      { label: "zubplug-backend", href: "https://github.com/Zubplug/zubplug-backend" },
      { label: "zubplug_mobile", href: "https://github.com/Zubplug/zubplug_mobile" },
      { label: "zubplug_partner_mobile", href: "https://github.com/Zubplug/zubplug_partner_mobile" },
    ],
  },
  {
    heading: "Ineplug Platform",
    subtitle: "Service Operations",
    links: [
      { label: "ineplug-backend", href: "https://github.com/Zubplug/ineplug-backend" },
      { label: "ineplug-frontend", href: "https://github.com/Zubplug/ineplug-frontend" },
    ],
  },
  {
    heading: "Assetkore Platform",
    subtitle: "Business & Asset Management",
    links: [
      { label: "Assetkore-backend", href: "https://github.com/Zubplug/Assetkore-backend" },
      { label: "assetkore-frontend", href: "https://github.com/Zubplug/assetkore-frontend" },
      { label: "assetkore_mobile", href: "https://github.com/Zubplug/assetkore_mobile" },
      { label: "assetkore_business", href: "https://github.com/Zubplug/assetkore_business" },
    ],
  },
];

export default function PortfolioSite() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5600,
    arrows: false,
  };

  return (
    <>
      <Helmet>
        <title>Inemesit Joseph Akpan | Premium Full-Stack Portfolio</title>
        <meta
          name="description"
          content="Premium portfolio for Inemesit Joseph Akpan: full-stack engineer, systems architect, consultant, and product-focused builder."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className="premium-shell min-h-screen text-slate-900" style={{ fontFamily: "Manrope, sans-serif" }}>
        <section className="relative overflow-hidden px-5 py-12 md:px-12 md:py-16 lg:px-24">
          <div className="noise-grid pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-rose-300/35 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="premium-card rounded-[2rem] border border-black/5 p-6 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[170px_1fr] md:items-center">
                <img
                  src="/profile.png"
                  alt="Inemesit Joseph Akpan"
                  className="h-40 w-40 rounded-3xl object-cover ring-4 ring-white/60 shadow-xl shadow-black/15"
                />
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-800/15 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900">
                    <FaCrown className="text-amber-700" />
                    Premium Engineering Portfolio
                  </p>
                  <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "Sora, sans-serif" }}>
                    Inemesit Joseph Akpan
                  </h1>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-slate-700 md:text-base">
                    Full-Stack Engineer • Mobile Engineer • Founder, Zubplug Digital Integrated Services Limited
                  </p>
                  <p className="mt-3 text-base text-slate-700 md:text-lg">
                    <Typewriter
                      words={[
                        "Full-Stack Engineer",
                        "Fintech Infrastructure Builder",
                        "Mobile + Web Product Engineer",
                        "Scalable API & Systems Architect",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={65}
                      deleteSpeed={38}
                      delaySpeed={1600}
                    />
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
                    I design and ship production-grade systems end-to-end, from architecture and APIs to mobile apps
                    and operational dashboards, with strong focus on financial integrity, security, and real-world reliability.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href="mailto:zubplug@gmail.com"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900"
                    >
                      <FaEnvelope /> zubplug@gmail.com
                    </a>
                    <a
                      href="https://github.com/Zubplug"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900"
                    >
                      <FaGithub /> @Zubplug
                    </a>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="/Resume-Inemesit-Akpan.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-slate-700"
                    >
                      <FaDownload /> Download Resume
                    </a>
                    <a
                      href="https://calendly.com/zubplug/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-amber-700/15 bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-900 transition hover:bg-amber-200/80"
                    >
                      Book Interview Call <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </motion.header>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {impactHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-white/70 px-4 py-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-5 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Financially Accurate Systems",
                  text: "I engineer payment and ledger flows with idempotency, traceability, and audit-ready records.",
                  icon: <FaShieldAlt className="text-amber-700" />,
                },
                {
                  title: "Premium Product Experience",
                  text: "I build frontend and mobile interfaces that feel modern, trustworthy, and easy to use at scale.",
                  icon: <FaCrown className="text-amber-700" />,
                },
                {
                  title: "Business-Centered Delivery",
                  text: "I align architecture with business operations so teams can ship faster without sacrificing stability.",
                  icon: <FaHandshake className="text-amber-700" />,
                },
              ].map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="premium-card rounded-2xl border border-black/5 p-5"
                >
                  <div className="mb-3 text-xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7">
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Professional Skill Matrix
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                End-to-end capabilities across frontend, backend, mobile, deployment, and product execution.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="premium-card rounded-2xl border border-black/5 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7">
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Best-Fit Roles
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                Positioning for high-impact software roles where speed and quality both matter.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {roleFit.map((item) => (
                <article
                  key={item.title}
                  className="premium-card rounded-2xl border border-black/5 p-5"
                >
                  <div className="flex items-center gap-3 text-amber-700">
                    {item.icon}
                    <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7">
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Delivery Process
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                A clear working model that reduces risk and keeps delivery predictable.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {deliverySteps.map((step) => (
                <div key={step} className="premium-card flex items-start gap-3 rounded-xl border border-black/5 p-4">
                  <FaCheckCircle className="mt-0.5 text-emerald-700" />
                  <p className="text-sm text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-center gap-3">
              <FaTools className="text-amber-700" />
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Selected Work & Product Builds
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.58 }}
                  className="premium-card rounded-2xl border border-black/5 p-5"
                >
                  <div className="mb-3 flex items-center gap-3 text-amber-700">
                    {project.icon}
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{project.type}</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {project.status}
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-900 hover:text-slate-600"
                      >
                        Visit Project
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
              Client & Partner Feedback
            </h2>
            <Slider {...sliderSettings}>
              {testimonials.map((item) => (
                <div key={item.author} className="px-2 pb-5">
                  <blockquote className="premium-card mx-auto max-w-3xl rounded-2xl border border-black/5 p-6 text-center shadow-2xl shadow-black/10">
                    <p className="text-base italic leading-relaxed text-slate-700">“{item.quote}”</p>
                    <footer className="mt-4 text-sm font-semibold text-amber-800">{item.author}</footer>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section id="contact" className="px-5 py-12 md:px-12 lg:px-24">
          <div className="premium-card mx-auto max-w-4xl rounded-3xl border border-black/5 p-6 md:p-10">
            <h2 className="text-center text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
              Open to Immediate Interviews
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-700">
              Available for senior engineering roles, contract delivery, and product-critical build engagements.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href="mailto:zubplug@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                <FaEnvelope /> Send Email
              </a>
              <a
                href="https://github.com/Zubplug"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                <FaGithub /> View GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-5 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-center gap-3">
              <FaDatabase className="text-amber-700" />
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Portfolio Repositories
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {portfolioGroups.map((group) => (
                <article key={group.heading} className="premium-card rounded-2xl border border-black/5 p-5">
                  <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                    {group.heading}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">{group.subtitle}</p>
                  <div className="mt-4 space-y-2">
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-8 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-2xl border border-black/10 bg-white/70 p-6 text-center backdrop-blur">
            <div className="flex items-center justify-center gap-2 text-amber-700">
              <FaCloud />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">Engineering Philosophy</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
              I build systems that do not break under real-world usage, remain financially accurate and auditable,
              and scale without constant rewrites while preserving delivery speed.
            </p>
          </div>
        </section>

        <footer className="px-5 pb-8 pt-2 text-center text-xs text-slate-600 md:px-12 lg:px-24">
          <p>&copy; {new Date().getFullYear()} Inemesit Joseph Akpan. Premium engineering portfolio.</p>
          <p className="mt-2 text-slate-500">Available for global product teams, startups, and enterprise projects.</p>
        </footer>
      </main>
    </>
  );
}
