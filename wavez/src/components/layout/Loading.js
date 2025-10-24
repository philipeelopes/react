import styles from './Loading.module.css'
import loading from '../../img/Loading.svg'



function Loading() {
  return (
    <div className={styles.loader_container}>
      <svg
        className={styles.spinner}
        viewBox="0 0 50 50"
      >
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
      <p className={styles.text}>Carregando...</p>
    </div>
  )
}

export default Loading
