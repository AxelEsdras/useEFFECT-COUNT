import styles from './contenedor.module.css'

function container({ children }) {
   return <div className={styles.container}>{children}</div>
}

export default container