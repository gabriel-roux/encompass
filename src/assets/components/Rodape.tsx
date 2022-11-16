import styles from '../../styles/Rodape.module.css'

export function Rodape( ) {
    return (

        <div className={styles.rodape}>
            <h1 className={styles.title}>ENCOMPASS.</h1>
            <p className={styles.rightsReserved}>© 2022 Emcompass Corporation. Todos os direitos reservados.</p>
            <small className={styles.aboutUs}>Sobre-nós <a href="https://www.instagram.com/encompassworkshop/">Encompass</a> <a href="https://www.instagram.com/enzobournet/    ">Enzo Bournet</a></small>
            <small className={styles.developedBy}>Desenvolvido por Gabriel Roux e Encompass</small>
        </div>

    );
}