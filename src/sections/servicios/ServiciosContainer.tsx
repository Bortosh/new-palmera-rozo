import DefaultMain from "../../generalPalmeras/DefaultMain";
import styles from "./styles/servicios.module.css";

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PoolIcon from '@mui/icons-material/Pool';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PetsIcon from '@mui/icons-material/Pets';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SecurityIcon from '@mui/icons-material/Security';



const ServiciosContainer = () => {

  return (
    <DefaultMain>
      <div className={styles.wrapperServicios}>
        <h4 className={styles.serviciosTitle}>
          Disfruta al máximo de tu estadía con nuestros servicios
        </h4>
        <p className={styles.serviciosDescription}>
          En Finca Las Palmeras, ofrecemos una amplia variedad de servicios
          para que vivas una experiencia única y confortable. Hemos pensado en
          cada detalle para garantizar que tu estadía sea inolvidable, ya sea
          que vengas en familia, con amigos o con tus mascotas. ¡Descubre todo
          lo que tenemos para ti!
        </p>
        <div className={styles.serviciosList}>
          <div className={styles.servicioItem}>
            <CleaningServicesIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Limpieza impecable</h4>
            <p>
              Servicio diario en habitaciones con aire acondicionado, baños
              privados, y camas ajustadas a tus necesidades.
            </p>
          </div>
          <div className={styles.servicioItem}>
            <PoolIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Piscina y relax</h4>
            <p>
              Relájate en nuestra piscina al aire libre, perfecta para un
              momento inolvidable.
            </p>
          </div>
          <div className={styles.servicioItem}>
            <SportsSoccerIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Espacios para actividades</h4>
            <p>
              Disfruta del área de juegos, campo de fútbol, y salón de fiestas
              para cualquier ocasión.
            </p>
          </div>
          <div className={styles.servicioItem}>
            <PetsIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Atención a mascotas</h4>
            <p>
              Somos pet friendly (hasta 3 mascotas). Recuerda que la limpieza de
              ellas es responsabilidad del dueño.
            </p>
          </div>
          <div className={styles.servicioItem}>
            <TravelExploreIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Guías turísticos</h4>
            <p>
              Explora los alrededores con la ayuda de guías especializados que
              te conectarán con experiencias locales únicas.
            </p>
          </div>
          <div className={styles.servicioItem}>
            <SecurityIcon style={{ fontSize: '40px', color: '#C19A6B' }} />
            <h4>Excelente Seguridad</h4>
            <p>
              Contamos con personal capacitado y sistemas de vigilancia para garantizar una estadía segura en todo momento.
            </p>
          </div>
        </div>
      </div>
    </DefaultMain>
  );
};

export default ServiciosContainer;
