import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { CiSearch } from 'react-icons/ci';

export function Home(){
    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder='Digite o símbolo da moeda: BTC...'/>
                <button type='submit'>
                    <CiSearch size={30} color="#FFF"/>
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moeda</th>
                        <th scope='col'>Valor mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <Link to="/detail/btc"  className={styles.link}>
                                <span>Bitcoin</span> | BTC
                            </Link>
                        </td>
                        <td className={styles.tdLabel} data-label="Mercado">
                            R$ 19293
                        </td>
                        <td className={styles.tdLabel} data-label="Preço">
                            R$ 40.962
                        </td>
                        <td className={styles.tdLoss} data-label="Volume">
                            <span>-5.3</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}