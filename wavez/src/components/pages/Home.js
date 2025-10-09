import styles from './Home.module.css';
import savign from '../../img/fundo.jpg';


function Home(){
return(
    <section>
        <h1>Bem-vindo ao <span>Wavez</span> </h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <a href='/'>Criar projeto</a>
        <img  src={savign} alt="Wavez" />
    </section>

)

}

export default Home;