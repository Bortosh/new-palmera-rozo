import DefaultMain from "../../generalPalmeras/DefaultMain";
import styles from "./styles/promociones.module.css";
import { Card, CardContent, Typography } from "@mui/material";

const PromocionesContainer = () => {
  return (
    <DefaultMain>
      <div className={styles.wrapperSectionTitle}>
        <h4 className={styles.sectionTitle}>
          ¡APROVECHA NUESTRAS PROMOCIONES!
        </h4>
      </div>
      <div className={styles.wrapperPromociones}>
        <Card className={styles.promocionCard}>
          <CardContent>
            <Typography variant="h5" className={styles.promocionTitle}>
              Tarifas Especiales para Grupos Grandes
            </Typography>
            <Typography variant="body2" className={styles.promocionText}>
              Obtén descuentos exclusivos para grupos de más de 30 personas.
              Perfecto para reuniones familiares, eventos corporativos o viajes
              con amigos.
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.promocionCard}>
          <CardContent>
            <Typography variant="h5" className={styles.promocionTitle}>
              Descuentos para Estancias Prolongadas
            </Typography>
            <Typography variant="body2" className={styles.promocionText}>
              Disfruta de tarifas reducidas si te quedas más de 5 días. ¡Mientras
              más te quedes, menos pagas!
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.promocionCard}>
          <CardContent>
            <Typography variant="h5" className={styles.promocionTitle}>
              Eventos con Todo Incluido
            </Typography>
            <Typography variant="body2" className={styles.promocionText}>
              El costo del alquiler incluye mesas y sillas para tus eventos,
              además de asesoría para organizar el espacio según tus
              necesidades. Capacidad de hasta 200 personas.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </DefaultMain>
  );
};

export default PromocionesContainer;
