'use client';

import { motion } from 'framer-motion';

import styles from './page.module.css';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const highlights = [
  { label: 'Experience', value: '8+ years' },
  { label: 'Projects', value: '42 shipped' },
  { label: 'Focus', value: 'Immersive UX' }
];

const timeline = [
  {
    title: 'Principal Product Architect',
    company: 'Nebula Systems',
    timeframe: '2022 — Present',
    copy:
      'Led the vision for adaptive human-machine interfaces, launching a predictive dashboard platform adopted by Fortune 100 teams.'
  },
  {
    title: 'Lead Experience Designer',
    company: 'Horizon Labs',
    timeframe: '2019 — 2022',
    copy:
      'Built spatial computing prototypes that evolved into a multi-sensory onboarding journey with 60% faster user activation.'
  },
  {
    title: 'Creative Technologist',
    company: 'Pulse Collective',
    timeframe: '2016 — 2019',
    copy:
      'Merged visual storytelling with data to produce immersive brand activations and interactive narratives showcased globally.'
  }
];

const skills = [
  'Creative Direction',
  'Design Systems',
  'Spatial UX',
  'Next.js',
  'WebGL Concepts',
  'Motion Design',
  'User Research',
  'Prototyping',
  'Narrative Design'
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/johndoe' },
  { label: 'Dribbble', href: 'https://dribbble.com/johndoe' },
  { label: 'X (Twitter)', href: 'https://x.com/johndoe' },
  { label: 'Email', href: 'mailto:hello@johndoe.com' }
];

export default function HomePage() {
  return (
    <div className={styles.scene}>
      <AnimatedBackdrop />
      <header className={styles.header}>
        <div className={styles.logo}>JD</div>
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.primaryChip} href="#contact">
          Let&apos;s Collaborate
        </a>
      </header>
      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <div className={styles.heroText}>
            <motion.span
              className={styles.eyebrow}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Personal Nexus · 2099 Edition
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            >
              John Doe
            </motion.h1>
            <motion.p
              className={styles.heroCopy}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Principal experience architect sculpting immersive interfaces for tomorrow&apos;s
              web. I design multi-sensory narratives that fuse data, sound, and motion into
              moments people remember.
            </motion.p>
            <motion.div
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <a className={styles.primaryButton} href="#contact">
                Initiate Project
              </a>
              <a className={styles.secondaryButton} href="#experience">
                View Timeline
              </a>
            </motion.div>
            <motion.dl
              className={styles.metrics}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.55, staggerChildren: 0.1 }
                }
              }}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  className={styles.metricItem}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                >
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
          <div className={styles.heroPanel}>
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className={styles.infoIntro}>
                Currently crafting intelligent collaboration tools with the Nebula Systems R&amp;D
                crew. I translate cosmic-level ideas into interfaces that feel inevitable.
              </p>
              <div className={styles.cardGrid}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.pillLink}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>{link.label}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                      <path
                        d="M3 9L9 3M9 3H4.5M9 3V7.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>About</span>
            <h2>Catalyst for human-centered futures.</h2>
          </div>
          <div className={styles.aboutGrid}>
            <article className={styles.aboutCard}>
              <h3>Vision</h3>
              <p>
                I choreograph stories where humans and algorithms collaborate seamlessly. My work
                brings clarity to complex systems, turning data into intuitive journeys.
              </p>
            </article>
            <article className={styles.aboutCard}>
              <h3>Method</h3>
              <p>
                Blending speculative design, rapid prototyping, and sonic exploration, I craft
                resonant experiences that feel alive in motion and sound.
              </p>
            </article>
            <article className={styles.aboutCard}>
              <h3>Impact</h3>
              <p>
                From enterprise platforms to immersive exhibitions, my interfaces have amplified
                teams, energized communities, and inspired investors.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.experience} id="experience">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Experience</span>
            <h2>Chronicles from the frontier.</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((entry) => (
              <motion.article
                key={entry.title}
                className={styles.timelineCard}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.timelineMeta}>
                  <span className={styles.timelineTime}>{entry.timeframe}</span>
                  <span className={styles.timelineCompany}>{entry.company}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.skills} id="skills">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>Disciplines that power my craft.</h2>
          </div>
          <div className={styles.skillCloud}>
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className={styles.skillPill}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Connect</span>
            <h2>Let&apos;s build the next signal.</h2>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <h3>Signal Boost</h3>
              <p>Send a direct transmission and let&apos;s architect a new experience together.</p>
              <a className={styles.primaryButton} href="mailto:hello@johndoe.com">
                hello@johndoe.com
              </a>
            </div>
            <div className={styles.contactCard}>
              <h3>Download Dossier</h3>
              <p>Explore my latest case studies, process notes, and prototype breakdowns.</p>
              <a
                className={styles.secondaryButton}
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Access Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} John Doe. Crafted under neon skies.</span>
      </footer>
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <>
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className={styles.pulseOne}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.55, 0.35]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.pulseTwo}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className={styles.pulseThree}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </>
  );
}
