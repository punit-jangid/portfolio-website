import { createFileRoute } from "@tanstack/react-router";
import {
  BrainCircuit,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  MousePointerClick,
  Plug,
  Send,
  Target,
  Trophy,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import developerVisual from "@/assets/punit-developer-visual.png";
import { Button } from "@/components/ui/button";

const GITHUB = "https://github.com/punit-jangid";
const LINKEDIN = "https://www.linkedin.com/in/punit-jangid7en/";
const EMAIL = "punitjangid028@gmail.com";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punit Jangid | B.Tech CSE Student Portfolio" },
      { name: "description", content: "Portfolio of Punit Jangid, a first-year B.Tech CSE student at JECRC University building Python, API and AI-powered desktop projects." },
      { property: "og:title", content: "Punit Jangid | Student Developer" },
      { property: "og:description", content: "Projects like FRIDAY AI, skills, achievements and contact details of Punit Jangid." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const skills = [
  { name: "Python", detail: "Primary programming language", icon: Code2, tone: "bg-coral/10" },
  { name: "Git", detail: "Version control", icon: GitBranch, tone: "bg-sky/15" },
  { name: "GitHub", detail: "Code hosting & collaboration", icon: Github, tone: "bg-lemon/25" },
  { name: "PyQt5", detail: "Desktop GUI development", icon: Monitor, tone: "bg-mint/15" },
  { name: "REST APIs", detail: "API integration", icon: Plug, tone: "bg-coral/10" },
  { name: "AI / LLM APIs", detail: "AI application development", icon: BrainCircuit, tone: "bg-sky/15" },
  { name: "Automation", detail: "PyAutoGUI & desktop automation", icon: MousePointerClick, tone: "bg-lemon/25" },
  { name: "Prompt Engineering", detail: "Structured AI workflows", icon: Lightbulb, tone: "bg-mint/15" },
];

const tools = ["Requests", "Pygame", "Psutil", "python-dotenv", "SpeechRecognition", "Edge-TTS", "VS Code"];

const projects = [
  { number: "01", title: "FRIDAY AI", subtitle: "Voice-Controlled Desktop AI Assistant", description: "Modular desktop AI assistant combining LLM integration, voice interaction, automation, and system monitoring.", tech: ["Python", "Groq API", "AI", "Automation", "Speech"], color: "text-coral", url: `${GITHUB}/friday-ai` },
  { number: "02", title: "Weather App", subtitle: "Desktop weather application", description: "Desktop weather application using OpenWeatherMap API with a PyQt5 graphical interface.", tech: ["Python", "PyQt5", "REST API"], color: "text-sky", url: `${GITHUB}/weather-app` },
  { number: "03", title: "PyQt5 Stopwatch", subtitle: "Desktop timer tool", description: "Desktop stopwatch with start, stop, reset, and timer-based updates.", tech: ["Python", "PyQt5", "GUI"], color: "text-mint", url: `${GITHUB}/stopwatch` },
  { number: "04", title: "Python Alarm Clock", subtitle: "Time-based alert script", description: "Python alarm clock with time-based checking and audio alerts.", tech: ["Python", "Pygame", "Automation"], color: "text-coral", url: `${GITHUB}/alarm-clock` },
];

const achievements = [
  { icon: Trophy, label: "15 September 2026", title: "VCC Jaipur 2026 — Grand Champion + Match MVP", text: "Won VCC Jaipur 2026 and received Match MVP recognition. Awarded the championship trophy." },
  { icon: Lightbulb, label: "JECRC University / JIC", title: "Entrepreneurship Development Program", text: "Participated in entrepreneurship-focused sessions covering ideation, design thinking, product development, and go-to-market strategy." },
];

const socials = [
  { label: "GitHub", href: GITHUB, icon: Github },
  { label: "LinkedIn", href: LINKEDIN, icon: Linkedin },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#home" className="min-w-0 truncate rounded-full border-2 border-ink px-3 py-1.5 font-display text-base font-bold uppercase shadow-[3px_3px_0_var(--ink)] sm:px-4 sm:text-lg">Punit Jangid</a>
          <nav className="hidden items-center gap-5 font-mono text-xs lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-coral">{item}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} {...ext} aria-label={`${label} profile (opens in new tab)`} className="hidden size-9 place-items-center rounded-full border-2 border-ink transition-colors hover:bg-lemon sm:grid"><Icon size={16} /></a>
            ))}
            <Button asChild variant="dark" className="hidden sm:inline-flex"><a href="#contact">Let's Connect</a></Button>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid border-t-2 border-ink bg-cream px-4 py-3 font-mono text-sm lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-ink/15 py-3">{item}</a>)}
            <div className="flex gap-3 pt-3">
              <Button asChild variant="dark" className="flex-1"><a href="#contact" onClick={() => setMenuOpen(false)}>Let's Connect</a></Button>
              {socials.map(({ label, href, icon: Icon }) => <Button key={label} asChild variant="outline" size="icon"><a href={href} {...ext} aria-label={label}><Icon size={18} /></a></Button>)}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-12 md:pt-20">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lemon px-3 py-1 font-mono text-xs shadow-[3px_3px_0_var(--ink)]"><span className="size-2 rounded-full bg-mint" />First year · Jaipur, India</span>
              <h1 className="mt-7 font-display text-5xl font-bold leading-[0.96] sm:text-7xl lg:text-8xl">Hi, I'm<br /><span className="text-coral">Punit</span> Jangid</h1>
              <p className="mt-6 max-w-xl font-mono text-base font-bold leading-relaxed sm:text-lg">B.Tech CSE Student <span className="text-sky">|</span> Aspiring Software Developer</p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">I'm a first-year B.Tech Computer Science and Engineering student at JECRC University, Jaipur. I enjoy building software, working with Python and APIs, exploring AI, and turning ideas into practical projects.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="large"><a href="#projects">View My Projects</a></Button>
                <Button asChild variant="outline" size="large"><a href="#contact">Contact Me</a></Button>
                <a href={GITHUB} {...ext} className="inline-flex items-center gap-2 font-mono text-sm font-bold underline-offset-4 hover:text-coral hover:underline"><Github size={18} />GitHub</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-sky/20 shadow-[8px_8px_0_var(--ink)]">
                <img src={developerVisual} alt="Colorful illustration of a laptop with code and artificial intelligence connections" width={1024} height={1024} className="aspect-square w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-ink py-20 text-cream">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div><p className="font-mono text-sm font-bold uppercase text-coral">About</p><h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl">A curious first-year building for the future</h2></div>
              <div className="space-y-4 text-base leading-relaxed text-cream/80 sm:text-lg">
                <p>I'm a first-year B.Tech Computer Science and Engineering student at <strong className="text-lemon">JECRC University</strong>, Jaipur. I'm focused on developing strong programming fundamentals and building practical software projects.</p>
                <p>My current work is mainly around Python, APIs, desktop applications, automation, and AI-powered applications. I enjoy understanding how systems work and then turning that knowledge into something functional.</p>
                <p>I'm currently expanding my skills in software development, data structures and algorithms, web development, backend development, and AI.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GraduationCap, title: "Education", lines: ["B.Tech CSE", "JECRC University", "2026–2030"] },
                { icon: MapPin, title: "Location", lines: ["Jaipur, Rajasthan, India"] },
                { icon: Target, title: "Focus", lines: ["Software Development", "AI / Automation", "Problem Solving"] },
                { icon: Languages, title: "Languages", lines: ["English", "Hindi"] },
              ].map(({ icon: Icon, title, lines }) => (
                <article key={title} className="rounded-2xl border-2 border-cream/25 p-5">
                  <Icon className="text-lemon" size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-mono text-xs font-bold uppercase text-coral">{title}</h3>
                  {lines.map((l) => <p key={l} className="mt-1 text-sm text-cream/85">{l}</p>)}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">My toolkit</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Technical <span className="text-sky">Skills</span></h2>
            <div className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-5">
              {skills.map(({ name, detail, icon: Icon, tone }) => <article key={name} className={`${tone} min-w-0 rounded-3xl border-2 border-ink p-5 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1 sm:p-6`}><Icon className="size-7 text-ink sm:size-8" aria-hidden="true" /><h3 className="mt-4 break-words font-display text-lg font-bold">{name}</h3><p className="mt-1 text-xs text-ink/65">{detail}</p></article>)}
            </div>
            <div className="mt-10">
              <h3 className="font-mono text-xs font-bold uppercase text-ink/60">Tools & Libraries</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{tools.map((t) => <li key={t} className="rounded-full border-2 border-ink bg-card px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-y-2 border-ink bg-card py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">Things I've built</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Selected <span className="text-mint">Projects</span></h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.number} className="flex flex-col rounded-3xl border-2 border-ink bg-background p-6 shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1">
                  <span className={`font-mono text-xs font-bold ${p.color}`}>{p.number} · {p.subtitle.toUpperCase()}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-lemon/30 px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
                  <Button asChild variant="dark" className="mt-6 w-full"><a href={p.url} {...ext} aria-label={`View ${p.title} on GitHub (opens in new tab)`}>View on GitHub <ExternalLink size={15} /></a></Button>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink/65">Plus additional Python practice projects on GitHub.</p>
            <Button asChild variant="outline" size="large" className="mt-4"><a href={GITHUB} {...ext}>View All Projects on GitHub <Github size={18} /></a></Button>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">Beyond the code</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Achievements</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {achievements.map(({ icon: Icon, title, label, text }) => (
                <article key={title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-2xl border-2 border-ink bg-card p-5 shadow-[4px_4px_0_var(--ink)]">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lemon"><Icon size={24} aria-hidden="true" /></span>
                  <div className="min-w-0"><p className="font-mono text-xs text-coral">{label}</p><h3 className="mt-1 font-display text-lg font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink/65">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-y-2 border-ink bg-lemon py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
              <span className="grid size-16 place-items-center rounded-2xl border-2 border-ink bg-cream shadow-[4px_4px_0_var(--ink)]"><GraduationCap size={34} aria-hidden="true" /></span>
              <div><p className="font-mono text-xs font-bold uppercase">Education</p><h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">B.Tech — Computer Science and Engineering</h2><p className="mt-2 flex items-center gap-2 text-sm"><MapPin size={16} />JECRC University, Jaipur · 2026–2030</p></div>
              <span className="w-fit rounded-full border-2 border-ink bg-cream px-5 py-2 font-mono text-sm font-bold">First Year</span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[["Class XII", "NIOS", "65%"], ["Class X", "CBSE", "85%"]].map(([c, b, s]) => (
                <div key={c} className="flex items-center justify-between rounded-2xl border-2 border-ink bg-cream px-5 py-3 font-mono text-sm"><span><strong>{c}</strong> · {b}</span><span className="font-bold">{s}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><div className="grid gap-10 rounded-[2rem] border-2 border-ink bg-ink p-7 text-cream shadow-[10px_10px_0_var(--coral)] sm:p-12 md:grid-cols-2">
            <div><p className="font-mono text-sm font-bold uppercase text-coral">Contact</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Let's Connect</h2><p className="mt-4 max-w-md leading-relaxed text-cream/70">I'm open to learning, collaborating and talking about code, AI or new ideas.</p>
              <ul className="mt-8 space-y-3 font-mono text-sm">
                {[
                  { icon: Mail, color: "text-coral", label: EMAIL, href: `mailto:${EMAIL}`, external: false },
                  { icon: Linkedin, color: "text-sky", label: "linkedin.com/in/punit-jangid7en", href: LINKEDIN, external: true },
                  { icon: Github, color: "text-mint", label: "github.com/punit-jangid", href: GITHUB, external: true },
                  { icon: Globe2, color: "text-lemon", label: "punit-connects-code.lovable.app", href: "https://punit-connects-code.lovable.app", external: true },
                ].map(({ icon: Icon, color, label, href, external }) => (
                  <li key={label}><a href={href} {...(external ? ext : {})} className="inline-flex max-w-full items-center gap-3 break-all underline decoration-cream/30 underline-offset-4 transition-colors hover:text-lemon hover:decoration-lemon"><Icon className={`${color} shrink-0`} size={20} aria-hidden="true" />{label}</a></li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <label className="block"><span className="mb-2 block font-mono text-xs">Name</span><input required name="name" autoComplete="name" placeholder="Your name" className="w-full rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label>
              <label className="block"><span className="mb-2 block font-mono text-xs">Email</span><input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label>
              <label className="block"><span className="mb-2 block font-mono text-xs">Message</span><textarea required name="message" rows={4} placeholder="Tell me what's on your mind" className="w-full resize-none rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label>
              <Button type="submit" variant="lemon" className="w-full">Send via Email <Send size={17} /></Button>
              <p className="text-xs text-cream/60">Opens your email app with the message ready to send.</p>
            </form>
          </div></div>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-card">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 py-10 text-center sm:grid-cols-3 sm:items-center sm:text-left">
          <div><p className="font-display text-xl font-bold">Punit Jangid</p><p className="mt-1 text-xs text-ink/60">Student Developer in Jaipur</p></div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs" aria-label="Footer navigation">{navItems.map((i) => <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-coral">{i}</a>)}</nav>
          <div className="sm:text-right">
            <div className="flex justify-center gap-4 sm:justify-end">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} {...ext} aria-label={label} className="hover:text-coral"><Icon size={20} /></a>)}</div>
            <p className="mt-3 font-mono text-[10px] text-ink/60">© 2026 Punit Jangid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
