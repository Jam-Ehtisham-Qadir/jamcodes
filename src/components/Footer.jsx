import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>
        © 2026 <span className={styles.accent}>Jam Ehtisham Qadir</span>
      </span>
      <span className={styles.right}>jamcodes.dev</span>
    </footer>
  )
}
