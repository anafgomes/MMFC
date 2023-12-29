import React from 'react';
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <div className={styles.museumsection}>
      <div className={styles.apresentacao}>
        <h1>Apresentação</h1>
        <br />
        <hr />
        <br />
        <p>
          O <strong>Museu Municipal Francisco Coelho</strong> está localizado no Palacete Augusto Dias, um prédio
          histórico na cidade de Marabá.
        </p>
        <br />
      <p>O museu possui 11 salas de exposição, cada uma com um tema específico. A <strong>"Linha do tempo"</strong>
        oferece uma viagem
        histórica por meio de eventos marcantes. Na <strong>"Pinacoteca"</strong>, você encontrará obras contemporâneas
        com bico de pena
        ou nanquim. Na sala <strong>"Ciclos Econômicos"</strong> retrata a cultura extrativista vegetal e mineral da
        região. Em <strong>"Mineração e Geologia"</strong>, há uma variedade de rochas, minerais, gemas e fósseis
        coletados localmente. A sala <strong>"Espeleologia"</strong> proporciona uma experiência imersiva em uma caverna
        da região. A <strong>"Zoologia''</strong> exibe animais
        regionais por meio de taxidermia, com um piso interativo simulando um aquário de água doce. A importância da
        cultura indígena local é destacada na sala da <strong>"Etnologia"</strong>, com uma projeção holográfica de um
        indígena falando
        sobre seu cotidiano. A réplica do sítio arqueológico do Espírito Santo pode ser encontrada na sala da
        <strong>"Arqueologia"</strong>, com artefatos usados em pesquisas. A <strong>"Sala das Lendas"</strong>
        apresenta a cultura
        imaterial da região
        através do imaginário popular. Por fim. a <strong>"Sala de Exposições Temporárias''</strong> é dedicada a
        exposições de curta
        duração, fornecendo oportunidades para artistas locais mostrarem seu trabalho.
      </p>
      <br/>
      <p>O Museu Municipal Francisco Coelho busca estabelecer uma relação afetiva com seu público, para além das
        exposições, o espaço oferece um Auditório com capacidade para 35 pessoas, a <strong>"Lojinha do Chico''</strong>
        com artesanatos
        regionais disponíveis para aquisição pelos visitantes, e o <strong>"Café do Chico"</strong> aberto ao público,
        onde é possível
        desfrutar de música ao vivo, lanches, cafezinho e apreciar o jardim que é totalmente integrado com o prédio.</p>
      <br/>
        <br />
        <h2>O prédio</h2>
        <p>
          Inaugurado em 7 de agosto de 2020, o museu é um espaço de exposições com um ambiente inovador, projetado por
          especialistas em diversas áreas. Ele agrega elementos da história centenária de Marabá e proporciona aos
          visitantes uma experiência tecnológica e imersiva.
        </p>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Sobre;
