import navItems from '../routes/routes-list'
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/sidebarstyle.module.css'

interface SidebarListProps {
    handleClose?: () => void;
}

const SidebarList = ({ handleClose }: SidebarListProps) => {

    const location = useLocation()
    const pathNameLocation = location.pathname

    return (
        <>
            {navItems.map(({ id, path, text }) => {

                const isActive = path === pathNameLocation;

                return (
                    <li key={id} onClick={handleClose} className={styles.wrapperSidebarItems}>
                        <Link to={path} className={`${styles.sidebarItem} ${isActive ? styles.active : ""}`}>{text}</Link>
                    </li>
                )
            })}
        </>
    )
}

export default SidebarList;