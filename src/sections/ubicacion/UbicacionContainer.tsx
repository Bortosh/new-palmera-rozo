import DefaultMain from "../../generalPalmeras/DefaultMain"
import styles from './styles/ubicacion.module.css'


const UbicacionContainer = () => {

  const coords = "https://maps.google.com/maps?q=calle%2010%2019%20la%20torre%20rozo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;?hl=en=&output=embed";

  const coordsFooter = 'https://www.google.com/maps?ll=3.619018,-76.421998&z=15&t=m&hl=en&gl=US&mapclient=embed&q=calle+10+19+la+torre+rozo';

  return (
    <DefaultMain title="ubicacion" >
      <div className={styles.mapContainer}>
        <iframe
          title="Mapa interactivo"
          className={styles.ubicacionWrapper}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          src={coords}
          id={coordsFooter}
        />
      </div>
    </DefaultMain>
  )
}

export default UbicacionContainer

