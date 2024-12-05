
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from './styles/preguntas.module.css'
import DefaultMain from "../../generalPalmeras/DefaultMain";

const faqData = [
  {
    question: "¿Qué tipos de descuentos ofrecen para grupos grandes?",
    answer: "Ofrecemos tarifas especiales para grupos de más de 30 personas. Perfectas para reuniones familiares, eventos corporativos o viajes grupales.",
  },
  {
    question: "¿Qué incluye el alquiler para eventos?",
    answer: "El costo del alquiler incluye mesas y sillas para los eventos, además de asesoría para aprovechar al máximo los espacios.",
  },
  {
    question: "¿Cuántas personas pueden hospedarse en la finca?",
    answer: "La capacidad habitacional de la finca es de hasta 80 personas.",
  },
  {
    question: "¿La finca es apta para niños y mascotas?",
    answer: "Sí, la finca es pet-friendly (máximo 3 mascotas) y cuenta con áreas ideales para familias con niños.",
  },
  {
    question: "¿Cómo se realiza una reserva en Finca Las Palmeras?",
    answer: "Puedes contactarnos directamente por whatsapp en la seccion de reservas en nuestra pagina web.",
  },
];

const FAQContainer = () => {
  return (
    <DefaultMain>
      <div className={styles.wrapperFaq}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>¡Preguntas Frecuentes!</h2>
          <p className={styles.faqDescription}>
            Resuelve tus dudas sobre nuestras promociones, servicios y más.
          </p>
        </div>
        <div className={styles.accordionWrapper}>
          {faqData.map((item, index) => (
            <Accordion key={index} className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={styles.accordionSummary}
              >
                <Typography className={styles.accordionQuestion}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordionAnswer}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </DefaultMain>
  );
};

export default FAQContainer;
