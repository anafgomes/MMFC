import { Link } from "react-router-dom"
import logo from './logo-museu.png'
import CabecalhoLink from '../../components/CabecalhoLink'
import styles from "./Cabecalho.module.css"

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img className={styles.logo} src={logo} alt="Logo Museu"></img>
            </Link>
            <nav>
                <CabecalhoLink className={styles.CabecalhoLink} url='./Sobre'>
                    SOBRE O MUSEU
                </CabecalhoLink>
                <CabecalhoLink className={styles.CabecalhoLink} url='/Visitacao'>
                    VISITAÇÃO
                </CabecalhoLink>
                <CabecalhoLink className={styles.CabecalhoLink} url='./Noticias'>
                    NOTICIAS
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho