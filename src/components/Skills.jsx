import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'AI / ML',
    color: 'accent',
    skills: ['Python', 'LLMs', 'RAG Pipelines', 'OpenAI API', 'Google Vertex AI', 'Computer Vision', 'DeepFace', 'YOLO', 'Whisper', 'FAISS', 'Sentence Transformers', 'Tesseract OCR'],
  },
  {
    title: 'Backend',
    color: 'accent2',
    skills: ['Flask', 'Django', 'PostgreSQL', 'REST APIs', 'JWT Auth', 'Google OAuth', 'SQLite', 'Redis'],
  },
  {
    title: 'Frontend',
    color: 'accent',
    skills: ['React', 'Vite', 'JavaScript', 'HTML / CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'DevOps & Tools',
    color: 'accent2',
    skills: ['Apache', 'Gunicorn', 'CentOS VPS', 'Docker', 'Git / GitHub', 'Hugging Face Spaces', 'Oracle Cloud', 'FFmpeg'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>Skills</div>
          <h2 className={styles.title}>What I work with</h2>
        </motion.div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className={styles.group}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`${styles.groupTitle} ${styles[group.color]}`}>
                {group.title}
              </div>
              <div className={styles.tags}>
                {group.skills.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
