import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiExternalLink } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import VideoModal from './VideoModal'
import styles from './Projects.module.css'

function ProjectCard({ project, index, onPlay }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <span className={styles.cardNum}>{project.number}</span>
          {project.badge && (
            <span className={styles.badge}>{project.badge}</span>
          )}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.cardSubtitle}>{project.subtitle}</div>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map(t => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
        </div>

        <div className={styles.actions}>
          {!project.noDemo && (
            <button
              className={styles.playBtn}
              onClick={() => onPlay(project)}
            >
              <FiPlay size={13} />
              Watch Demo
            </button>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.liveBtn}
          >
            <FiExternalLink size={13} />
            Live Site
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>Projects</div>
          <h2 className={styles.title}>Things I've built</h2>
          <p className={styles.subtitle}>
            All projects are live and deployed — not just GitHub repos.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onPlay={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
