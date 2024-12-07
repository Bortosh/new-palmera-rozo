import style from './styles/footerStyle.module.css'
import SidebarLogo from '../sidebar/components/SidebarLogo';

const FooterContainer = () => {
  return (
    <footer className={style.mainContentFooter}>
      <SidebarLogo />
    </footer>
  )
}

export default FooterContainer;