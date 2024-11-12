import { useLocation } from 'react-router-dom'
import style from './styles/headerStyle.module.css'

const HeaderContainer = () => {

  const location = useLocation()
  const formattedPathname = location.pathname.slice(1);

  return (
    <div className={style.mainContentHeader}>
      <div>
        <h1>Las Palmeras</h1>
      </div>
      <div>
        <h4>{formattedPathname}</h4>
      </div>

    </div>
  )
}

export default HeaderContainer