import { useLocation } from 'react-router-dom'
import style from './styles/headerStyle.module.css'

const HeaderContainer = () => {

  const location = useLocation()
  const formattedPathname = location.pathname.slice(1);

  return (
    <div className={style.mainContentHeader}>
      <div className={style.wrapperHeaderTitle}>
        <h1 className={style.titleText}>Las Palmeras</h1>
      </div>
      <div className={style.wrapperSubTitle}>
        <h4 className={style.subTitleText}>{formattedPathname}</h4>
      </div>

    </div>
  )
}

export default HeaderContainer