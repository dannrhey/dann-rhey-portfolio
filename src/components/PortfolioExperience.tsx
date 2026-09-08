import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Download,
  ExternalLink,
  Facebook,
  Headphones,
  Inbox,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Moon,
  Palette,
  Play,
  Search,
  Send,
  Share2,
  Sparkles,
  Sun,
  Target,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { portfolioData } from '@/data/portfolioData'

type Project = (typeof portfolioData.projects)[number] & { video?: string }
type WorkSample = (typeof portfolioData.workSamples)[number]
type Theme = 'dark' | 'light'

const iconMap = {
  inbox: Inbox,
  clipboard: ClipboardCheck,
  search: Search,
  headset: Headphones,
  share: Share2,
  palette: Palette,
}

const socialIconMap = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
}

const navItems = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Work', 'projects'],
  ['Tools', 'tools'],
  ['Samples', 'samples'],
  ['Contact', 'contact'],
]

function imagePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

function usePageEffects() {
  useEffect(() => {
    const root = document.documentElement
    root.dataset.motion = portfolioData.settings.animations
      ? portfolioData.settings.animationIntensity
      : 'off'
    root.dataset.parallax = portfolioData.settings.enableParallax ? 'on' : 'off'

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    )
    revealElements.forEach((element) => observer.observe(element))

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      root.style.setProperty('--scroll-progress', `${progress * 100}%`)
      root.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])
}

function ThemeToggle({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <button
      className="icon-button"
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading" data-reveal="up">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  )
}

function MediaPreview({ src, title, className = '' }: { src: string; title: string; className?: string }) {
  return (
    <div className={`media-preview ${className}`}>
      <img src={imagePath(src)} alt={`${title} preview`} loading="lazy" />
      <div className="media-sheen" />
      <span className="media-index">DR / VA</span>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close project" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-media">
          {project.video ? (
            <video controls playsInline poster={imagePath(project.images[0])}>
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <MediaPreview src={project.images[0]} title={project.title} />
          )}
          <span className="modal-category">{project.category}</span>
        </div>
        <div className="modal-content">
          <p className="eyebrow">Project presentation</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="modal-lead">{project.description}</p>
          <div className="project-facts">
            <div><Target size={18} /><span><b>Objective</b>{project.objective}</span></div>
            <div><BriefcaseBusiness size={18} /><span><b>My role</b>{project.role}</span></div>
            <div><Sparkles size={18} /><span><b>Result</b>{project.results}</span></div>
          </div>
          <div className="modal-split">
            <div>
              <p className="detail-label">Process</p>
              <ol className="process-list">
                {project.process.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
              </ol>
            </div>
            <div>
              <p className="detail-label">Tools</p>
              <div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              {project.link && (
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                  View work sample <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

function SampleModal({ sample, onClose }: { sample: WorkSample; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className="sample-modal" role="dialog" aria-modal="true" aria-labelledby="sample-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close work sample" onClick={onClose}><X size={20} /></button>
        <MediaPreview src={sample.image} title={sample.title} />
        <div className="sample-modal-copy">
          <p className="eyebrow">{sample.category}</p>
          <h2 id="sample-title">{sample.title}</h2>
          <p>{sample.description}</p>
          <div className="tag-list">{sample.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          {sample.link && <a className="button primary" href={sample.link} target="_blank" rel="noreferrer">Open sample <ExternalLink size={16} /></a>}
        </div>
      </article>
    </div>
  )
}

export function PortfolioExperience() {
  const [theme, setTheme] = useState<Theme>(portfolioData.settings.defaultTheme as Theme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null)
  const [toolFilter, setToolFilter] = useState('All')
  const [sampleFilter, setSampleFilter] = useState('All')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false, label: '' })

  usePageEffects()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme)
  }, [])

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }))
    const enterInteractive = (event: Event) => {
      const target = event.target as HTMLElement
      setCursor((current) => ({ ...current, active: true, label: target.closest('[data-cursor]')?.getAttribute('data-cursor') ?? '' }))
    }
    const leaveInteractive = () => setCursor((current) => ({ ...current, active: false, label: '' }))
    window.addEventListener('mousemove', moveCursor)
    const elements = document.querySelectorAll('a, button, [data-cursor]')
    elements.forEach((element) => {
      element.addEventListener('mouseenter', enterInteractive)
      element.addEventListener('mouseleave', leaveInteractive)
    })
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', enterInteractive)
        element.removeEventListener('mouseleave', leaveInteractive)
      })
    }
  }, [selectedProject, selectedSample, toolFilter, sampleFilter])

  const visibleTools = useMemo(
    () => portfolioData.toolCategories.filter((group) => toolFilter === 'All' || group.category === toolFilter),
    [toolFilter],
  )
  const visibleSamples = useMemo(
    () => portfolioData.workSamples.filter((sample) => sampleFilter === 'All' || sample.category === sampleFilter),
    [sampleFilter],
  )

  const submitContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('sending')
    const form = event.currentTarget
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormStatus('sent')
    } catch {
      setFormStatus('error')
    }
  }

  const videoEnabled = portfolioData.settings.enableVideo && portfolioData.hero.enableVideo

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className={`custom-cursor ${cursor.active ? 'is-active' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true">
        {cursor.label && <span>{cursor.label}</span>}
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span>DR</span><b>{portfolioData.personal.name}</b>
        </a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a className="availability" href="#contact"><span />{portfolioData.personal.availabilityLabel}</a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        {videoEnabled && (
          <video className="hero-video" autoPlay loop muted playsInline poster={portfolioData.hero.mobileFallback}>
            <source src={portfolioData.hero.backgroundVideo} type="video/mp4" />
          </video>
        )}
        <div className="hero-atmosphere" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-eyebrow">{portfolioData.hero.eyebrow}</p>
            <h1>{portfolioData.hero.title}</h1>
            <p className="hero-title">{portfolioData.hero.subtitle}</p>
            <p className="hero-intro">{portfolioData.hero.description}</p>
            <div className="hero-actions">
              <a className="button primary" href={portfolioData.hero.primaryCta.href}>{portfolioData.hero.primaryCta.label}<ArrowDown size={17} /></a>
              <a className="button secondary" href={portfolioData.hero.secondaryCta.href}>{portfolioData.hero.secondaryCta.label}<ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual" data-reveal="scale">
            <div className="portrait-frame">
              <img src={imagePath(portfolioData.personal.profileImage)} alt={portfolioData.personal.name} />
              <span className="portrait-label">Virtual operations / creative support</span>
            </div>
            <div className="floating-card card-inbox"><Inbox size={18} /><span><b>Inbox</b>Zero loose ends</span><Check size={15} /></div>
            <div className="floating-card card-calendar"><CalendarDays size={18} /><span><b>Schedule</b>Protected focus</span></div>
            <div className="floating-card card-status"><span className="status-orbit" /><span><b>Projects</b>Moving forward</span></div>
          </div>
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><i /><span>01 — 10</span></div>
      </section>

      <section className="section about-section" id="about">
        <SectionHeading number="01" eyebrow="About" title="The steady hand behind busy work." />
        <div className="about-layout">
          <div className="about-copy" data-reveal="left">
            {portfolioData.personal.aboutLong.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="workstyle-card" data-reveal="right">
            <p className="detail-label">How I work</p>
            <p>{portfolioData.personal.workStyle}</p>
            <div className="strength-list">{portfolioData.personal.strengths.map((strength) => <span key={strength}><Check size={14} />{strength}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <SectionHeading number="02" eyebrow="Services" title="Support that creates breathing room." description="Thoughtful execution across the operational and creative work that keeps a business moving." />
        <div className="services-grid">
          {portfolioData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers3
            return (
              <article className="service-card" key={service.id} data-reveal="up" style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
                <div className="service-top"><span>0{index + 1}</span><Icon size={22} /></div>
                <h3>{service.title}</h3><p>{service.description}</p><ChevronRight className="service-arrow" size={20} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionHeading number="03" eyebrow="Selected work" title="Proof, presented in motion." description="Each project opens into a focused case-study presentation with the objective, process, tools, role, and result." />
        <div className="projects-stack">
          {portfolioData.projects.map((project, index) => (
            <article className="project-card" key={project.id} data-reveal={index % 2 ? 'right' : 'left'} data-cursor="View">
              <button type="button" className="project-open" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title}`}>
                <MediaPreview src={project.images[0]} title={project.title} />
                <div className="project-copy">
                  <div className="project-meta"><span>{project.category}</span>{project.sample && <span>Sample project</span>}<span>0{index + 1}</span></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  <span className="project-cta"><Play size={14} fill="currentColor" /> View presentation</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="tools">
        <SectionHeading number="04" eyebrow="Toolkit" title="Fluent in the tools behind modern teams." />
        <div className="filter-row" role="group" aria-label="Filter tools">
          {['All', ...portfolioData.toolCategories.map((group) => group.category)].map((category) => (
            <button className={toolFilter === category ? 'is-active' : ''} type="button" key={category} onClick={() => setToolFilter(category)}>{category}</button>
          ))}
        </div>
        <div className="tools-cloud" data-reveal="up">
          {visibleTools.flatMap((group) => group.items.map((tool, index) => (
            <article className="tool-pill" key={`${group.category}-${tool.name}`} style={{ '--float-delay': `${index * -0.4}s` } as React.CSSProperties}>
              <span>{tool.name.charAt(0)}</span><div><b>{tool.name}</b><small>{group.category}</small></div>
            </article>
          )))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading number="05" eyebrow="Capabilities" title="Practical skills, organized by how they help." />
        <div className="skills-layout">
          {portfolioData.skillCategories.map((group, groupIndex) => (
            <article className="skill-group" key={group.category} data-reveal={groupIndex ? 'right' : 'left'}>
              <div className="skill-title"><span>0{groupIndex + 1}</span><h3>{group.category}</h3></div>
              <div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="samples">
        <SectionHeading number="06" eyebrow="Work samples" title="A closer look at the deliverables." />
        <div className="filter-row sample-filters" role="group" aria-label="Filter work samples">
          {['All', ...portfolioData.workSampleCategories].map((category) => <button className={sampleFilter === category ? 'is-active' : ''} type="button" key={category} onClick={() => setSampleFilter(category)}>{category}</button>)}
        </div>
        <div className="samples-grid">
          {visibleSamples.map((sample, index) => (
            <button className="sample-card" type="button" key={sample.title} onClick={() => setSelectedSample(sample)} data-reveal="up" data-cursor="Open" style={{ '--delay': `${index * 45}ms` } as React.CSSProperties}>
              <MediaPreview src={sample.image} title={sample.title} />
              <div><span>{sample.category}</span><h3>{sample.title}</h3><p>{sample.description}</p></div>
            </button>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <SectionHeading number="07" eyebrow="Process" title="Clear from first brief to final handoff." />
        <div className="process-track">
          {portfolioData.process.map((step) => <article key={step.number} data-reveal="up"><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
        </div>
      </section>

      <section className="section why-section" id="why">
        <SectionHeading number="08" eyebrow="Why me" title="Reliable by design, not by accident." />
        <div className="why-grid">
          {portfolioData.whyWorkWithMe.map((item, index) => <article key={item.title} data-reveal="up"><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <SectionHeading number="09" eyebrow="Testimonials" title="Trust, in their words." description="This section is ready for real client feedback whenever you are." />
        <div className="testimonials-grid">
          {portfolioData.testimonials.map((testimonial) => (
            <blockquote key={`${testimonial.name}-${testimonial.position}`} data-reveal="up">
              <MessageSquareText size={24} /><p>“{testimonial.quote}”</p><footer><b>{testimonial.name}</b><span>{testimonial.position}</span>{testimonial.sample && <small>Sample testimonial</small>}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-copy" data-reveal="left">
          <p className="eyebrow">10 · Contact</p><h2>{portfolioData.contact.heading}</h2><p>{portfolioData.contact.intro}</p>
          <div className="contact-details">
            <a href={`mailto:${portfolioData.personal.email}`}><Mail size={17} />{portfolioData.personal.email}</a>
            <span><MapPin size={17} />{portfolioData.personal.location}</span>
            <a href={imagePath(portfolioData.personal.resume)} target="_blank" rel="noreferrer"><Download size={17} />Download resume</a>
          </div>
          <div className="social-row">
            {portfolioData.socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap] ?? ExternalLink
              return <a key={social.platform} href={social.url} aria-label={social.platform} target="_blank" rel="noreferrer"><Icon size={18} /></a>
            })}
          </div>
        </div>
        <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitContact} data-reveal="right">
          <input type="hidden" name="form-name" value="contact" /><p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>
          <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
          <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company or team" /></label>
          <label><span>Support needed</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option>{portfolioData.contact.servicesNeeded.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label className="full-field"><span>Tell me about the work</span><textarea name="message" required rows={5} placeholder="What would make your workweek feel easier?" /></label>
          <div className="form-footer"><button className="button primary" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending…' : 'Send message'}<Send size={16} /></button><span role="status">{formStatus === 'sent' && 'Message sent — thank you.'}{formStatus === 'error' && 'Something went wrong. Please email me directly.'}</span></div>
        </form>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} {portfolioData.personal.name}</span><span>Reliable support. Thoughtful execution.</span><a href="#top">Back to top <ArrowDown size={14} className="rotate-icon" /></a></footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedSample && <SampleModal sample={selectedSample} onClose={() => setSelectedSample(null)} />}
    </main>
  )
}
