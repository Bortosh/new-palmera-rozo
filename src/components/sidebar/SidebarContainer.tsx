import styles from './styles/sidebarstyle.module.css'
import SidebarList from './components/SidebarList';
import SidebarLogo from './components/SidebarLogo';

import { useEffect, useState } from 'react';
import ModalSidebar from './components/ModalSidebar';

const Sidebar = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [modalRender, setModalRender] = useState(false)

  const handleClickOpen = () => {
    setModalRender(true);
  };

  const handleClose = () => {
    setModalRender(false);
  };

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth < 790);
  };

  useEffect(() => {
    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);



  return (
    <>
      {
        isMobile
          ?
          <div className={styles.sidebarWrapper}>
            <ModalSidebar handleClickOpen={handleClickOpen} handleClose={handleClose} modalRender={modalRender} />
          </div>
          :
          <div className={styles.sidebarWrapper}>
            <div className={styles.wrapperSidebarLogo}>
              <SidebarLogo />
            </div>
            <ul className={styles.sidebarWrapperList}>
              <SidebarList />
            </ul>
          </div>
      }
    </>
  );
}

export default Sidebar;
