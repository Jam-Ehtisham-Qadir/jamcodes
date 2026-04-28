import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import styles from './VideoModal.module.css'

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.header}>
            <div>
              <div className={styles.modalNum}>{project.number}</div>
              <div className={styles.modalTitle}>{project.title}</div>
            </div>
            <button className={styles.close} onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          <div className={styles.videoWrap}>
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className={styles.video}
              />
            ) : (
              <div className={styles.placeholder}>
                <div className={styles.placeholderIcon}>▶</div>
                <div className={styles.placeholderText}>Demo video coming soon</div>
                <div className={styles.placeholderSub}>Upload your video to public/videos/{project.id}.mp4</div>
              </div>
            )}
          </div>

          <div className={styles.footer}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.liveBtn}>
              Visit Live Site →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
