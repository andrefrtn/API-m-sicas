import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pag2000.css';

function mostraTudo(dados) {
  const tabela = document.querySelector("#tabela");
  const capa = document.querySelector("#capa");

  tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados
  let totalVisualizacoes = 0;
  let linhaAtual = null;
  let contagem = 0;

  dados.forEach(item => {
    item.top_musicas.forEach(musica => {
      if (contagem % 6 === 0) {
        linhaAtual = document.createElement('div');
        linhaAtual.className = 'linha';
        tabela.appendChild(linhaAtual);
      }

      const card = document.createElement('div');
      card.className = 'didi';
      card.style.background = degrade(); // Aplica degradê aleatório
      card.innerHTML = `
        <section class="sec">
          <img src="${musica.capa}" alt="${musica.titulo}" />
          <p class="texto">${musica.titulo}</p>
          <p class="texto">${musica.artista}</p>
          <p class="texto">${musica.visualizacoes}</p>
        </section>
      `;
      linhaAtual.appendChild(card);

      totalVisualizacoes += Number(musica.visualizacoes);
      contagem++;
    });
  });

  capa.innerHTML = `Total de Favoritos = 0`; // Atualize conforme necessário
}

function coraleatoria() {
  // Gera uma cor hexadecimal aleatória mais viva
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function degrade() {
  // Gera um degradê onde a cor vai para ela mesma, porém mais escura
  const cor1 = coraleatoria();
  const cor2 = darkenColor(cor1, 20); // Ajuste o valor para tornar a cor mais escura
  return `linear-gradient(to bottom, ${cor1}, ${cor2})`;
}

function darkenColor(color, percent) {
  // Função para escurecer uma cor hexadecimal em percentagem
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
}

function Pag2000() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('./2000a2005.json')
      .then(res => res.json())
      .then(data => {
        // Ordena os dados em ordem alfabética pelo ano
        data.musicas_virais.sort((a, b) => a.ano - b.ano);
        setDados(data.musicas_virais);
        mostraTudo(data.musicas_virais);
      });
  }, []);

  return (
    <>
      <div id="box">
        <div className="inside-box1">
          <svg className='home' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          <Link className='txts' to="/"> <span className='busca'>Início</span> <br /></Link>
          <svg className='home' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <span className='busca1'> Busca</span>
        </div>
        <div className="inside-box2">
          <section>
            <div className='divs'>
              <img src="../assets/imgs/2000.png" alt="2000 - 2005" />
              <Link className='txts' to="/2000-2005">2000 - 2005</Link>
            </div>
            <div className='divs'>
              <img src="../assets/imgs/2006.png" alt="2006 - 2010" />
              <Link className='txts' to="/2006-2010">2006 - 2010</Link>
            </div>
            <div className='divs'>
              <img src="../assets/imgs/2011.png" alt="2011 - 2015" />
              <Link className='txts' to="/2011-2015">2011 - 2015</Link>
            </div>
          </section>
        </div>
        <div className="inside-box3">
          <span className='topm'>As músicas mais tocadas nos anos de 2005 <span><a href="https://open.spotify.com/playlist/4AgelyEdLqHU4JdfVlb4Ka?si=Zdfbku1vSnO1UPkTaR3Ttw&pi=u-YXIXg1SZQYaD"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg></a></span></span>
          <p className='escute'>Escute os sons mais reproduzidos nos anos de 2000 à 2005</p>
          <div id="tabela"></div>
        </div>
      </div>
    </>
  );
}

export default Pag2000;
