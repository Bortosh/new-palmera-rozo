import { Box, Divider } from "@mui/material"
import { FC } from "react"
import './styles.css'

interface Props {
    title?: string,
    children: JSX.Element[] | JSX.Element
  }

const DefaultMain: FC<Props> = ({ title = 'Las Palmeras', children }) => {
  return (
    <Box
    component='main'
    className={'main-content-layout'}
  >
    <Box sx={{ mb: 2 }}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2 className='masterSubTitle'>{ title }</h2>
      </div>
      <Divider />
    </Box>
    <div>
      { children }
    </div>
  </Box>
  )
}

export default DefaultMain