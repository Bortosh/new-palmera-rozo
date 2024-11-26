import DefaultMain from "../../generalPalmeras/DefaultMain"
import styles from './styles/ubicacion.module.css'


const UbicacionContainer = () => {

  const coords = "https://maps.google.com/maps?q=calle%2010%2019%20la%20torre%20rozo+(Mi%20nombre%20de%20negocios)&t=&z=15&ie=UTF8&iwloc=B&hl=en&output=embed&wmode=transparent";

  const coordsFooter = 'https://www.google.com/maps?ll=3.619018,-76.421998&z=15&t=m&hl=en&gl=US&mapclient=embed&q=calle+10+19+la+torre+rozo';

  return (
    <DefaultMain title="UBICACIÓN" >
      <a href={coordsFooter} target='_blank' className={styles.ubicacionAncore}>Calle 10 # 19 - 483 La Torre, Rozo, Valle Del Cauca</a>
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

