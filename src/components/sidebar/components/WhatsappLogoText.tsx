import styles from '../styles/sidebarstyle.module.css'
import whatsappFunction from './whatsappFunction'

const WhatsappLogoText = () => {
  return (
    <a target='_blank' href={whatsappFunction()} style={{textDecoration: 'none'}}>
      <p className={styles.logoText}>Reservar Ahora</p>
    </a>
  )
}

export default WhatsappLogoText;