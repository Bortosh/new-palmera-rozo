

const whatsappLogoReserva = () => {
  const urlWhatsapp = 'https://api.whatsapp.com/send?phone='
  const contactNumber = 573164487193
  const mensaje = "Hola, estoy interesado en realizar una reserva en Finca Las Palmeras. ¿Podrían confirmar disponibilidad, por favor?"

  // Codificar el mensaje
  const encodedMensaje = encodeURIComponent(mensaje);

   // Concatenar URL, número y mensaje
   const whatsappUrl = `${urlWhatsapp}${contactNumber}&text=${encodedMensaje}`;
 
   return whatsappUrl;

}

export default whatsappLogoReserva;