import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BrainCircuit,
  Code2,
  ExternalLink,
  Gamepad2,
  GitBranch,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import developerVisual from "@/assets/punit-developer-visual.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punit Jangid | B.Tech CSE Student Portfolio" },
      { name: "description", content: "Portfolio of Punit Jangid, a B.Tech CSE student at JECRC University exploring software development, AI and problem-solving." },
      { property: "og:title", content: "Punit Jangid | Student Developer" },
      { property: "og:description", content: "Explore Punit Jangid's skills, projects, achievements and computer science journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const skills = [
  { name: "Python", detail: "Core programming", icon: Code2, tone: "bg-coral/10" },
  { name: "HTML", detail: "Semantic structure", icon: Globe2, tone: "bg-sky/15" },
  { name: "CSS", detail: "Responsive styling", icon: Sparkles, tone: "bg-lemon/25" },
  { name: "JavaScript", detail: "Interactive logic", icon: BrainCircuit, tone: "bg-mint/15" },
  { name: "Git", detail: "Version control", icon: GitBranch, tone: "bg-coral/10" },
  { name: "GitHub", detail: "Code publishing", icon: Github, tone: "bg-sky/15" },
  { name: "Web Development", detail: "Building for the web", icon: Globe2, tone: "bg-lemon/25" },
  { name: "Problem Solving", detail: "Step-by-step thinking", icon: BrainCircuit, tone: "bg-mint/15" },
];

const projects = [
  { number: "01", category: "PYTHON", title: "Python Projects", description: "Small Python applications and practice projects created to strengthen programming fundamentals and everyday problem-solving.", tech: ["Python", "Logic"], color: "text-coral" },
  { number: "02", category: "WEB", title: "Personal / Business Website", description: "A responsive website built with core web technologies and published through GitHub.", tech: ["HTML", "CSS", "GitHub"], color: "text-sky" },
  { number: "03", category: "AI", title: "AI-Based Projects", description: "Beginner-level experiments exploring AI tools, automation and useful prompt-driven workflows.", tech: ["AI Tools", "Python", "Prompts"], color: "text-mint" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
          <a href="#home" className="min-w-0 truncate rounded-full border-2 border-ink px-3 py-1.5 font-display text-base font-bold uppercase shadow-[3px_3px_0_var(--ink)] sm:px-4 sm:text-lg">Punit Jangid</a>
          <nav className="hidden items-center gap-5 font-mono text-xs lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-coral">{item}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="dark" className="hidden sm:inline-flex"><a href="#contact">Let's Connect</a></Button>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid border-t-2 border-ink bg-cream px-4 py-3 font-mono text-sm lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-ink/15 py-3 last:border-0">{item}</a>)}
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
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">I enjoy programming, building software, exploring artificial intelligence and solving problems one thoughtful step at a time.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="large"><a href="#projects">View My Projects</a></Button>
                <Button asChild variant="outline" size="large"><a href="#contact">Contact Me</a></Button>
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
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-start">
            <div><p className="font-mono text-sm font-bold uppercase text-coral">About</p><h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl">A curious first-year building for the future</h2></div>
            <div className="space-y-4 text-base leading-relaxed text-cream/80 sm:text-lg"><p>I'm a first-year B.Tech Computer Science and Engineering student at <strong className="text-lemon">JECRC University</strong>, Jaipur.</p><p>I'm interested in software development, programming, artificial intelligence and the technology shaping how we live and work. Right now, I'm learning fast and building small, practical projects along the way.</p></div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">My toolkit</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Technical <span className="text-sky">Skills</span></h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {skills.map(({ name, detail, icon: Icon, tone }) => <article key={name} className={`${tone} min-w-0 rounded-3xl border-2 border-ink p-4 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1 sm:p-6`}><Icon className="size-7 text-ink sm:size-8" aria-hidden="true" /><h3 className="mt-4 break-words font-display text-base font-bold sm:text-lg">{name}</h3><p className="mt-1 hidden text-xs text-ink/65 sm:block">{detail}</p></article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-y-2 border-ink bg-card py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">Work in progress</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Selected <span className="text-mint">Projects</span></h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => <article key={project.number} className="flex flex-col rounded-3xl border-2 border-ink bg-background p-6 shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1"><span className={`font-mono text-xs font-bold ${project.color}`}>{project.number} · {project.category}</span><h3 className="mt-3 font-display text-2xl font-bold">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full bg-lemon/30 px-3 py-1 font-mono text-xs">{item}</span>)}</div><Button asChild variant="dark" className="mt-6 w-full"><a href="#contact">View Project <ExternalLink size={15} /></a></Button></article>)}
            </div>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><p className="font-mono text-sm font-bold uppercase text-coral">Progress so far</p><h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Achievements</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {achievements.map(({ icon: ItemIcon, title, text }, index) => <article key={title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-2xl border-2 border-ink bg-card p-5 shadow-[4px_4px_0_var(--ink)]"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-lemon"><ItemIcon size={24} /></span><div className="min-w-0"><p className="font-mono text-xs text-coral">0{index + 1}</p><h3 className="mt-1 font-display text-lg font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink/65">{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="education" className="border-y-2 border-ink bg-lemon py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center"><span className="grid size-16 place-items-center rounded-2xl border-2 border-ink bg-cream shadow-[4px_4px_0_var(--ink)]"><GraduationCap size={34} /></span><div><p className="font-mono text-xs font-bold uppercase">Education</p><h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">B.Tech – Computer Science and Engineering</h2><p className="mt-2 flex items-center gap-2 text-sm"><MapPin size={16} />JECRC University, Jaipur</p></div><span className="w-fit rounded-full border-2 border-ink bg-cream px-5 py-2 font-mono text-sm font-bold">First Year</span></div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5"><div className="grid gap-10 rounded-[2rem] border-2 border-ink bg-ink p-7 text-cream shadow-[10px_10px_0_var(--coral)] sm:p-12 md:grid-cols-2">
            <div><p className="font-mono text-sm font-bold uppercase text-coral">Contact</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Let's Connect</h2><p className="mt-4 max-w-md leading-relaxed text-cream/70">I'm open to learning, collaborating and talking about code, AI or new ideas.</p><div className="mt-8 space-y-3 font-mono text-sm">
              <div className="flex items-center gap-3"><Mail className="text-coral" size={20} /><span>Email · Available on request</span></div>
              <div className="flex items-center gap-3"><Linkedin className="text-sky" size={20} /><span>LinkedIn · Profile link coming soon</span></div>
              <div className="flex items-center gap-3"><Github className="text-mint" size={20} /><span>GitHub · Profile link coming soon</span></div>
            </div></div>
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form"><label className="block"><span className="mb-2 block font-mono text-xs">Name</span><input required name="name" autoComplete="name" placeholder="Your name" className="w-full rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label><label className="block"><span className="mb-2 block font-mono text-xs">Email</span><input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label><label className="block"><span className="mb-2 block font-mono text-xs">Message</span><textarea required name="message" rows={4} placeholder="Tell me what's on your mind" className="w-full resize-none rounded-2xl border-2 border-transparent bg-cream px-5 py-3.5 font-mono text-sm text-ink placeholder:text-ink/45 focus:border-sky focus:outline-none" /></label><Button type="submit" variant="lemon" className="w-full">Send Message <Send size={17} /></Button>{submitted && <p role="status" className="rounded-xl bg-mint/15 px-4 py-3 text-sm text-mint">Thanks! The form is ready; direct delivery will be enabled when Punit's email is added.</p>}</form>
          </div></div>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-card">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 py-10 text-center sm:grid-cols-3 sm:items-center sm:text-left"><div><p className="font-display text-xl font-bold">Punit Jangid</p><p className="mt-1 text-xs text-ink/60">Student developer in Jaipur</p></div><nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs" aria-label="Footer navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><div className="sm:text-right"><div className="flex justify-center gap-4 sm:justify-end"><span title="LinkedIn link coming soon"><Linkedin size={20} /></span><span title="GitHub link coming soon"><Github size={20} /></span></div><p className="mt-3 font-mono text-[10px] text-ink/60">© 2026 Punit Jangid. All rights reserved.</p></div></div>
      </footer>
    </div>
  );
}
