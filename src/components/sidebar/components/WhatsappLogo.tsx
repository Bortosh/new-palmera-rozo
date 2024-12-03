import whatsapp from '../../../assets/logo/whatsapp.png'
import styles from '../styles/sidebarstyle.module.css'
import whatsappFunction from './whatsappFunction'

const WhatsappLogo = () => {
    return (
        <a target='_blank' href={whatsappFunction()}>
            <img className={styles.whatsapp_logo} src={whatsapp} alt='whatsapp logo' />
        </a>
    )
}

export default WhatsappLogo;