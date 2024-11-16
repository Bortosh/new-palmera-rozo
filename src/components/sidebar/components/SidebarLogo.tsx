import palms_black from '../../../assets/logo/palms_black.png'
import styles from '../styles/sidebarstyle.module.css'

const SidebarLogo = () => {
    return (
        <>
            <img className={styles.palms_black} src={palms_black} alt='palmeras' />
        </>
    )
}

export default SidebarLogo;