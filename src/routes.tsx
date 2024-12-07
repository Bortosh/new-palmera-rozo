import { Navigate } from "react-router-dom";

import ComentariosContainer from "./sections/comentarios/ComentariosContainer";
import GaleriaContainer from "./sections/galeria/GaleriaContainer";
import PalmerasContainer from "./sections/las palmeras/PalmerasContainer";
import NoticiasContainer from "./sections/noticias/NoticiasContainer";
import PreguntasContainer from "./sections/preguntas/PreguntasContainer";
import PromocionesContainer from "./sections/promociones/PromocionesContainer";
import RedesSocialesContainer from "./sections/redesSociales/RedesSocialesContainer";
import ReservasContainer from "./sections/reservas/ReservasContainer";
import ServiciosContainer from "./sections/servicios/ServiciosContainer";
import UbicacionContainer from "./sections/ubicacion/UbicacionContainer";

const routes = [
    { id: 1, index: true, path: "/", element: <PalmerasContainer /> },
    { id: 2, path: "/galeria", element: <GaleriaContainer /> },
    { id: 3, path: "/servicios", element: <ServiciosContainer /> },
    { id: 4, path: "/promociones", element: <PromocionesContainer /> },
    { id: 5, path: "/reservas", element: <ReservasContainer /> },
    { id: 6, path: "/comentarios", element: <ComentariosContainer /> },
    { id: 7, path: "/ubicacion", element: <UbicacionContainer /> },
    { id: 8, path: "/preguntas", element: <PreguntasContainer /> },
    { id: 9, path: "/redes", element: <RedesSocialesContainer /> },
    { id: 10, path: "/noticias", element: <NoticiasContainer /> },
    { id: 11, path: "*", element: <Navigate to="/" replace /> },
  ];

export default routes;