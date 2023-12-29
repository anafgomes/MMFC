import styles from './Rodape.module.css'

function Rodape() {
    return(
        <footer>
        <div id={styles.footer_content}>
          <div id={styles.footer_contacts}>
            <div id="footer_social_media">
              <a href="https://www.instagram.com/museumaraba/" class="footer-link" id="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
    
              <a href="https://www.facebook.com/MuseuMaraba/" class="footer-link" id="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
    
              <a href="museufranciscocoelho@gmail.com" class="footer-link" id="e-mail">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
            <br/>
            <p>O Museu Municipal Francisco Coelho é um museu histórico brasileiro criado para preservar e apresentar de modo
              interativo e moderno o patrimônio histórico e cultural da cidade de Marabá, Pará. A instituição está sob a
              administração da autarquia Fundação Casa da Cultura de Marabá (FCCM), à qual pertence boa parte do acervo
              exposto.</p>
          </div>
    
          <ul className={styles.footerlist}>
            <li>
              <h3>Setores</h3>
            </li>
            <li>
              <a href="https://casadaculturademaraba.org/setores/nucleo-de-arqueologia-etnologia-e-educacao-patrimonial/"
                className={styles.footerlink}>Núcleo de Arqueologia, Etnologia e Educação Patrimonial</a>
            </li>
            <li>
              <a href="https://casadaculturademaraba.org/setores/nucleo-de-espeleologia/" className={styles.footerlink}>Núcleo de
                Espeleologia</a>
            </li>
            <li>
              <a href="http://casadaculturademaraba.org/setores/nucleo-de-geologia/" class="footer-link">Núcleo de
                Geologia</a>
            </li>
            <li>
              <a href="https://casadaculturademaraba.org/setores/nucleo-de-zoologia/" class="footer-link"> Núcleo de
                Zoologia</a>
            </li>
            <li>
              <a href="https://casadaculturademaraba.org/setores/nucleo-de-botanica/" class="footer-link"> Núcleo de
                Botânica</a>
            </li>
          </ul>
    
          <ul className={styles.footerlist}>
            <li>
              <h3>Gestão</h3>
            </li>
            <li>
              <a href="src/html/administrator.html" className="footer-link">Administrador</a>
            </li>
          </ul>
    
        </div>
    
        <div id={styles.footerend}>
        </div>
      </footer>
    )
}

export default Rodape