
import style from './styles/headerStyle.module.css'

const HeaderContainer = () => {

  return (
    <div className={style.mainContentHeader}>
      <div className={style.wrapperHeaderTitle}>
        <h1 className={style.titleText}>Las Palmeras</h1>
      </div>
    </div>
  )
}

export default HeaderContainer