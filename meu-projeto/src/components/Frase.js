import styles from './Frase.module.css'


function Frase(){
    return( 
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                este é um componente frase
            </p>
        </div>
    )
}

export default Frase;