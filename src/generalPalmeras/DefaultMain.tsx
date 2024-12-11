import { Box } from "@mui/material"
import { FC } from "react"
import './styles.css'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const DefaultMain: FC<Props> = ({ children }) => {

  return (
    <Box
      component="main"
      className={`main-content-layout`}
    >
      {children}
    </Box>
  );
};

export default DefaultMain;
