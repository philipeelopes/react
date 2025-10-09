import{FaWhatsapp, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer(){
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            
            <li className={styles.social_item}>
                <FaWhatsapp/>
            </li>

            <li className={styles.social_item}>
                <FaInstagram/>
            </li>

            <li className={styles.social_item}>
                <FaLinkedin/>
            </li>
        </ul>

    <p className={styles.copy_right}> <span>Wavez</span> &copy; 2025</p>
    </footer>
    )
}

export default Footer;

