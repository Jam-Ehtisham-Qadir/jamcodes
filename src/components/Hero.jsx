import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, particles, animId

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,85,0,${p.alpha})`
        ctx.fill()
      })
      // draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,85,0,${0.06 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.gridBg} />

      <div className={styles.heroInner}>
      <div className={styles.content}>
        <motion.div className={styles.tag} {...fadeUp(0.1)}>
          <span className={styles.dot} />
          Available for remote work
        </motion.div>

        <motion.h1 className={styles.name} {...fadeUp(0.25)}>
          Jam<br />
          <span className={styles.nameDim}>Ehtisham</span><br />
          <span className={styles.nameDim}>Qadir</span>
        </motion.h1>

        <motion.p className={styles.role} {...fadeUp(0.4)}>
          AI / ML Engineer
        </motion.p>

        <motion.p className={styles.desc} {...fadeUp(0.5)}>
          Building production-grade AI systems — LLMs, computer vision,
          RAG pipelines, and full-stack AI SaaS platforms that actually ship.
        </motion.p>

        <motion.div className={styles.cta} {...fadeUp(0.6)}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={e => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects <FiArrowDown size={15} />
          </a>
          <a
            href="/resume.pdf"
            download
            className={styles.btnSecondary}
          >
            Download CV <FiDownload size={15} />
          </a>
          <a
            href="#contact"
            className={styles.btnGhost}
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div className={styles.stats} {...fadeUp(0.75)}>
          {[
            { n: '4+', l: 'Live Projects' },
            { n: '2+', l: 'Years Experience' },
            { n: '1', l: 'Full SaaS Built' },
          ].map(s => (
            <div key={s.l} className={styles.stat}>
              <span className={styles.statNum}>{s.n}</span>
              <span className={styles.statLabel}>{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.photoWrap}>
        <img src="/profile.jpeg" alt="Jam Ehtisham Qadir" className={styles.photo} />
        <div className={styles.photoOverlay} />
      </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
