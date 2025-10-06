import { FaFacebook, FaInstagram, FaLink, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css'


function Footer() {

    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

            <p>rodape</p>

        </footer>


    )


}

export default Footer;