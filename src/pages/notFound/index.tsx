import { Link } from "react-router-dom";
import styles from "./notfound.module.css";

export function Notfound(){
    return(
        <div className={styles.container}>
            <h1>Página 404 não existe</h1>
            <Link to="/">
                Acessar criptomoedas
            </Link>
        </div>
    )
}