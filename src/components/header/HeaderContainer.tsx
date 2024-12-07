
import style from './styles/headerStyle.module.css'

const HeaderContainer = () => {

  return (
    <header className={style.mainContentHeader}>
      <div className={style.wrapperHeaderTitle}>
        <h1 className={style.titleText}>Las Palmeras</h1>
      </div>
    </header>
  )
}

export default HeaderContainer