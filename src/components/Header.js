import styles from './Header.module.css'
import sb_logo from '../imgs/sb-logo-blue.png'

const Header = () => {
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={sb_logo} alt="SB logo" />
    </nav>
  )
}

export default Header
