import styles from './Loading.module.css'


function Loading(){
    return(
        <div className={styles.loader_continuar}>
        <img className={styles.loader} src={Loading} alt="Loading"/>

        </div>
    )

}

export default Loading