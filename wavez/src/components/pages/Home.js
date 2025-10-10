import styles from './Home.module.css';
import savign from '../../img/fundo6.png';
import LinkButton from '../layout/LinkButton';


function Home(){
return(
    <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Wavez</span> </h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img  src={savign} alt="Wavez" />
    </section>

)

}

export default Home;