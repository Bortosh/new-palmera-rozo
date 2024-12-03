import DefaultMain from "../../generalPalmeras/DefaultMain"
import styles from './styles/palmeras.module.css'
import palmeras from '../../assets/photos/palmeras.jpeg'
import { Divider } from "@mui/material"

const PalmerasContainer = () => {
  return (
    <DefaultMain>
      <h1 className={styles.sectionTitle}>Las palmeras</h1>
      <Divider />
      <div className={styles.containerPalmeras}>
        <div className={styles.containerImg}>
          <img src={palmeras} alt="palmeras" />
        </div>
        <div className={styles.textContainer}>
          <p>La finca "Las Palmeras", ubicada en el encantador municipio de Rozo, a pocos minutos de la vibrante ciudad de Cali, es el destino perfecto para quienes buscan un espacio exclusivo para descansar y disfrutar al máximo. Esta finca destaca por su amplio espacio pensado para el esparcimiento y la comodidad de todos sus visitantes.</p>

          <p>Con una hermosa piscina que invita a relajarse bajo el sol, tanto adultos como niños podrán disfrutar de refrescantes momentos de diversión y entretenimiento. Las Palmeras también cuenta con múltiples habitaciones equipadas con aire acondicionado, garantizando un descanso reparador en un ambiente cómodo y acogedor.</p>

          <p>La cocina completamente equipada es ideal para preparar tus comidas favoritas, mientras que la sala de eventos ofrece el escenario perfecto para todo tipo de celebraciones, desde fiestas y reuniones familiares hasta eventos corporativos. Con un sistema de sonido envolvente de alta calidad, las experiencias en Las Palmeras se llenan de música y alegría, creando recuerdos inolvidables.</p>

          <p>El amplio garaje y los espacios al aire libre permiten estacionar de forma segura y organizar actividades deportivas y recreativas, incluyendo juegos de fútbol con amigos y familiares. Ya sea para relajarte, compartir con seres queridos o celebrar un momento especial, la finca Las Palmeras es la elección ideal.</p>

          <p>Ven a Las Palmeras y descubre por qué es el lugar preferido para quienes buscan un entorno que combine confort, diversión y naturaleza. Te esperamos para que vivas momentos inolvidables rodeado de las mejores instalaciones y un servicio excepcional.

          </p>
        </div>
      </div>
    </DefaultMain >
  )
}

export default PalmerasContainer