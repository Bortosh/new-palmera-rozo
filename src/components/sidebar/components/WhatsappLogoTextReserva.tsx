import styles from '../styles/sidebarstyle.module.css'
import whatsappFunction from './whatsappFunction'

const WhatsappLogoTextReserva = () => {
  return (
    <a target='_blank' href={whatsappFunction()} style={{textDecoration: 'none'}}>
      <p className={styles.logoTextReserva}>Reservar Ahora</p>
    </a>
  )
}

export default WhatsappLogoTextReserva;