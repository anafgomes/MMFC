import React from 'react';
import styles from './Inicio.module.css'
import Card from '../../components/Card';
import Banner from '../../components/Banner';

import noticia from '../../../public/noticia-arraia.jpg'
import noticia1 from '../../../public/noticia-shows.jpg'
import noticia2 from '../../../public/noticia-nilson.jpg'
import img1 from '../../../public/museu-img-inicio.jpg'
import img2 from '../../../public/museu-francisco-coelho.jpg'
import img3 from '../../../public/museu-img-inicio.jpg'



const Inicio = () => {

    const images = [img1, img2, img3]
  return (
    <div className={styles.divpai}>
        <div className={styles.divfilho}>
        <h1>Museu Municipal Francisco Coelho</h1>
            <Banner images={images}/>

                    <br />
                    <br />
                    <h1>Fique por dentro</h1>
                    <br />
                    <hr />
                    <br />
                    
                    <div className={styles.container}>
                        <div className={styles.cards}>
                            <Card>
                                <img src={noticia} alt="Notícia 1" />
                                <h3>'Arraiá do Chico' anima fim de tarde no Museu Francisco Coelho</h3>
                                <p>
                                    O “Arraiá do Chico”, evento tradicional realizado no Museu Municipal Francisco Coelho em alusão ao mês de
                                    festas juninas, foi realizado no último dia 16 de […]
                                </p>
                                <a href="src/html/noticias.html" className={styles.btnleiamais}>
                                    Leia mais
                                </a>
                            </Card>
                            <Card>
                                <img src={noticia1} alt="Notícia 2"/>
                                <h3>Músicos da FCCM encantam marabaenses com shows históricos</h3>
                                <p>Antes da apresentação do cantor Nilson Chaves, na noite de sábado, 29 de abril, do Giro Cultural no Museu, duas bandas da Fundação Casa da Cultura […]
                                </p>
                                <a href="src/html/noticias.html" class="btn-leia-mais">Leia mais</a>
                            </Card>
                            <Card>
                                <img src={noticia2} alt="Notícia 3"/>
                                <h3>Giro Cultural: show de Nilson Chaves lota Praça Duque de Caxias</h3>
                                <p>O cantor e compositor paraense, Nilson Chaves, se apresentou na noite de sábado, 29, durante o II Giro
                                    Cultural no Museu. O show, promovido pela Fundação […]
                                </p>
                                <a href="src/html/noticias.html" class="btn-leia-mais">Leia mais</a>
                            </Card>
                        </div>
                    </div>


                    <div className={styles.contcomochegar}>
                        <div className={styles.comochegar}>
                            <h1>Como chegar</h1>
                            <br />
                            <hr />
                            <br />
                            <span>
                                <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4443889405575!2d-49.13782072584604!3d-5.348941453560642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c3a724f85a2393%3A0x509601c8ef2044bc!2sMuseu%20Municipal%20de%20Marab%C3%A1%20-%20Palacete%20Augusto%20Dias!5e0!3m2!1spt-BR!2sbr!4v1688702360624!5m2!1spt-BR!2sbr"
                                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </span>
                    </div>
                    </div>
                    
        </div>
        
    </div>
    
  );
};

export default Inicio;
