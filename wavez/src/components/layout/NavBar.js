import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './NavBar.module.css'
import logo from '../../img/original3.png'



function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'> <img className="logo"  src={logo} alt="Wavez" /></Link>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>

                     <li className={styles.item}>
                        <Link to='projects'>Projetos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/company'>Emrpesa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                


                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;