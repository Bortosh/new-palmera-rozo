import style from './styles/footerStyle.module.css'
import SidebarLogo from '../sidebar/components/SidebarLogo';

const FooterContainer = () => {
  return (
    <div className={style.mainContentFooter}>
      <SidebarLogo />
    </div>
  )
}

export default FooterContainer;