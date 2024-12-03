import DefaultMain from "../../generalPalmeras/DefaultMain"
import reservasLogo from '../../assets/logo/reservas_logo.jpg'
import styles from './styles/reservas.module.css'
import { Divider } from "@mui/material"
import WhatsappLogoTextReserva from "../../components/sidebar/components/WhatsappLogoTextReserva"


const ReservasContainer = () => {
  return (
    <DefaultMain>
      <div className={styles.wrapperSectionTitle}>
        <h4 className={styles.sectionTitle}>Las Palmeras está a un clic de distancia.</h4>
        <Divider />
      </div>
      <div className={styles.wrapperReservas}>
        <div className={styles.wrapperReservasText}>
          <p className={styles.reservaText}>En Finca Las Palmeras, hacemos que tu experiencia de reserva sea sencilla y personalizada. Todas nuestras reservas se realizan a través de WhatsApp para garantizar una atención rápida y eficiente. Recuerda que están sujetas a disponibilidad, ¡pero no dudes en consultarnos! Estamos aquí para hacer realidad tus momentos inolvidables.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WhatsappLogoTextReserva />
          </div>
        </div>
        <div className={styles.wrapperReservasLogo}>
          <img src={reservasLogo} alt="reservas logo" />
        </div>
      </div>
    </DefaultMain>
  )
}

export default ReservasContainer