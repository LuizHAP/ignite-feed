import styles from './index.module.css'

import igniteLogo from '../../assets/ignite-logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}