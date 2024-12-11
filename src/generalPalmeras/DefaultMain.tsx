import { Box } from "@mui/material"
import { FC, useEffect, useState } from "react"
import './styles.css'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const DefaultMain: FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <Box
      component="main"
      className={`main-content-layout ${isVisible ? 'fade-in' : ''}`}
    >
      {children}
    </Box>
  );
};

export default DefaultMain;
