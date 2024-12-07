import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import WhatsappLogoTextReserva from "../components/sidebar/components/WhatsappLogoTextReserva";

const WelcomeModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      aria-labelledby="welcome-modal-title"
      aria-describedby="welcome-modal-description"
      PaperProps={{
        style: {
          borderRadius: "20px",
          padding: "1.5rem",
          maxWidth: "500px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <DialogTitle
        id="welcome-modal-title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: '#b8860b',
          fontFamily: "'Playfair Display', serif",
        }}
      >
        🌴 ¡Bienvenidos a Las Palmeras! 🌴
      </DialogTitle>
      <DialogContent>
        <Typography
          id="welcome-modal-description"
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#555",
            margin: "1rem 0",
            lineHeight: "1.6",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Un refugio perfecto donde la naturaleza y la comodidad se encuentran.
          <strong> Vive experiencias inolvidables</strong> rodeado de paisajes espectaculares,
          tranquilidad y momentos únicos. 🌅✨
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#888",
            fontStyle: "italic",
            fontFamily: "'Roboto Slab', serif",
          }}
        >
          Reserva ahora y crea recuerdos para toda la vida.
        </Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          style={{
            borderRadius: "20px",
            padding: "0.5rem 2rem",
            backgroundColor: "#3f51b5",
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          ¡Explorar sitio web!
        </Button>
      </DialogActions>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WhatsappLogoTextReserva />
      </div>
    </Dialog>
  );
};

export default WelcomeModal;
