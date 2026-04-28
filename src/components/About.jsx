import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.div {...(inView ? fadeUp(0) : {})}>
            <div className={styles.label}>About me</div>
            <h2 className={styles.title}>
              Engineer.<br />Builder.<br />Shipper.
            </h2>
          </motion.div>
          <motion.div className={styles.text} {...(inView ? fadeUp(0.15) : {})}>
            <p>
              I'm an AI/ML Engineer based in <strong>Multan, Pakistan</strong>, currently building{' '}
              <a href="https://app.anumix.com" target="_blank" rel="noreferrer" className={styles.accentLink}>
                ANUMIX
              </a>{' '}
              — a full AI SaaS platform — as the sole developer at Dream Weavers LLC.
            </p>
            <p>
              I don't just experiment with AI. I architect, build, and deploy systems end-to-end —
              from backend APIs and LLM pipelines to React frontends and production VPS infrastructure.
            </p>
            <p>
              My focus is on systems that solve real business problems: document intelligence,
              AI video/image generation, face recognition, and intelligent automation workflows.
            </p>
          </motion.div>
        </div>

        <motion.div className={styles.right} {...(inView ? fadeUp(0.25) : {})}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardLabel}>Current Role</span>
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                Actively working
              </div>
            </div>
            <div className={styles.cardRole}>AI/ML Engineer</div>
            <div className={styles.cardCompany}>Dream Weavers LLC · Multan, PK</div>
            <div className={styles.cardDivider} />
            <div className={styles.cardItem}>
              <span className={styles.cardItemLabel}>Degree</span>
              <span className={styles.cardItemVal}>BS Artificial Intelligence</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.cardItemLabel}>University</span>
              <span className={styles.cardItemVal}>Air University, Islamabad</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.cardItemLabel}>Graduated</span>
              <span className={styles.cardItemVal}>2024</span>
            </div>
            <div className={styles.cardDivider} />
            <div className={styles.cardItem}>
              <span className={styles.cardItemLabel}>Availability</span>
              <span className={styles.cardItemVal} style={{ color: 'var(--accent)' }}>Remote · Full-time / Contract</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
