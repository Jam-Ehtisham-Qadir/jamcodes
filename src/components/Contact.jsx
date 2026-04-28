import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    value: 'jamehtishamqadir@gmail.com',
    href: 'mailto:jamehtishamqadir@gmail.com',
    icon: <FiMail size={18} />,
  },
  {
    label: 'LinkedIn',
    value: 'jam-ehtisham-qadir',
    href: 'https://linkedin.com/in/jam-ehtisham-qadir-aaa691243',
    icon: <FiLinkedin size={18} />,
  },
  {
    label: 'GitHub',
    value: 'Jam-Ehtisham-Qadir',
    href: 'https://github.com/Jam-Ehtisham-Qadir',
    icon: <FiGithub size={18} />,
  },
  {
    label: 'Upwork',
    value: 'Available for hire',
    href: 'https://www.upwork.com/freelancers/jamehtishamqadir',
    icon: <SiUpwork size={16} />,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>Contact</div>
          <h2 className={styles.title}>Let's work together</h2>
          <p className={styles.desc}>
            Open to remote full-time roles, contract work, and freelance projects.
            If you're building something with AI and need someone who ships — reach out.
          </p>
        </motion.div>

        <div className={styles.links}>
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.item}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 + 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.itemIcon}>{l.icon}</div>
              <div className={styles.itemText}>
                <span className={styles.itemLabel}>{l.label}</span>
                <span className={styles.itemValue}>{l.value}</span>
              </div>
              <FiArrowRight className={styles.arrow} size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
