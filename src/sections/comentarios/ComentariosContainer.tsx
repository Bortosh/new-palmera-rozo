import DefaultMain from "../../generalPalmeras/DefaultMain";
import styles from "./styles/comentarios.module.css";
import { Star, StarBorder } from "@mui/icons-material";

const ComentariosContainer = () => {

  const comentarios = [
    {
      nombre: "Clara Gómez",
      texto: "Un lugar increíble para desconectarse de la rutina. Las habitaciones son súper cómodas, y el ambiente es perfecto para relajarse en familia. Definitivamente volveremos.",
      estrellas: 5,
    },
    {
      nombre: "Andrés Martínez",
      texto: "La finca es preciosa, tiene espacios amplios y muy bien cuidados. Nos sentimos muy seguros todo el tiempo, ¡fue una experiencia maravillosa!",
      estrellas: 5,
    },
    {
      nombre: "Sofía Herrera",
      texto: "La piscina y las áreas recreativas son espectaculares. Agradecemos mucho la atención del personal. Todo estuvo perfecto para nuestro evento.",
      estrellas: 4,
    },
    {
      nombre: "Mauro Morales",
      texto: "El lugar tiene un ambiente acogedor y tranquilo. Ideal para disfrutar con amigos. Lo único que mejoraría es la señal Wi-Fi, pero en general, ¡muy recomendable!",
      estrellas: 4,
    },
    {
      nombre: "Laura Velásquez",
      texto: "Nos encantó la finca. Los espacios son ideales para niños y adultos, y mis mascotas estaban felices. Excelente relación calidad-precio.",
      estrellas: 5,
    },
    {
      nombre: "Carlos Fernández",
      texto: "Todo estuvo impecable, desde la limpieza hasta la decoración. Se siente como un verdadero paraíso natural. ¡Felicitaciones al equipo de Las Palmeras!",
      estrellas: 5,
    },
  ];

  return (
    <DefaultMain>
      <div className={styles.wrapperSectionTitle}>
        <h2 className={styles.sectionTitle}>Comentarios de Nuestros Visitantes</h2>
      </div>
      <div className={styles.wrapperComentarios}>
        {comentarios.map(({ nombre, texto, estrellas }, index) => (
          <div key={index} className={styles.cardComentario}>
            <h4 className={styles.nombre}>{nombre}</h4>
            <p className={styles.texto}>{texto}</p>
            <div className={styles.estrellas}>
              {[...Array(5)].map((_, i) =>
                i < estrellas
                  ?
                  (
                    <Star key={i} className={styles.starFilled} />
                  )
                  :
                  (
                    <StarBorder key={i} className={styles.starEmpty} />
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </DefaultMain>
  );
};

export default ComentariosContainer;
