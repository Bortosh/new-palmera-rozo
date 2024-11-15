import navItems from '../routes/routes-list'
import { Link } from "react-router-dom";
import styles from '../styles/sidebarstyle.module.css'

interface SidebarListProps {
    handleClose?: () => void;
}

const SidebarList = ({handleClose}:SidebarListProps) => {

    return (
        <>
            {navItems.map(({id, path, className, text}) => (
                <li key={id} onClick={handleClose} className={styles.wrapperSidebarItems}>
                    <Link to={path} className={className}>{text}</Link>
                </li>
            ))}
        </>
    )
}

export default SidebarList;