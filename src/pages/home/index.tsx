import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { CiSearch } from 'react-icons/ci';

interface CoinProps {
    name: string,
    delta_24h: string,
    price: string,
    symbol: string,
    volume_24h: string,
    market_cap: string,
    formatedPrice: string,
    formatedMarket: string
}

interface DataProps {
    coins: CoinProps[];
}

export function Home(){
    const [coins, setCoins] = useState<CoinProps[]>([]);
    useEffect(() => {
        function getData() {
            fetch('https://sujeitoprogramador.com/api-cripto/?key=df0ad826b87a3771')
            .then(response => response.json())
            .then((data: DataProps) => {
                let coinsData = data.coins.slice(0,15);

                let price = Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })

                const formatResult = coinsData.map((item) => {
                    const formated = {
                        ...item,
                        formatedPrice: price.format(Number(item.price)),
                        formatedMarket: price.format(Number(item.market_cap))
                    }
                    return formated;
                })

                setCoins(formatResult);
            })
        }
        getData();
    },[])

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