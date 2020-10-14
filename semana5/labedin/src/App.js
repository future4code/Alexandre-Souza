import React from 'react';
import './App.css';
import Profile from './img/perfil.jpg';
import Exchange from './img/intercambio.jpeg'
import Samsung from './img/samsung.png'
import Castrolanda from './img/castrolanda.png'
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardGrande from './components/CardGrande/CardGrande.js'
import CardPequeno from './components/CardPequeno/CardPequeno.js'
import Email from './img/email1.jpg'
import Endereco from './img/localizacao.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Profile}
          nome="Alexandre Oliveira de Souza"
          descricao="Boa comunicação. Capacidade de pensamento crítico. Trabalho em equipe. Flexibilidade e adaptabilidade. Ética de trabalho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={Email}
          nome="E-mail"
          texto="alexandre@labenu.com" 
        />        

        <CardPequeno
          imagem={Endereco}
          nome="Endereço"
          texto="Rua Santos Dumont, 1000 Minas Gerais" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Exchange} 
          nome="Exchange Trinity Facility Group 2019 - 2020" 
          descricao="Janitorial Supervisor - Toronto Canadá" 
        />
        
        <CardGrande 
          imagem={Samsung}
          nome="Samsung Mobile Brasil 2018 - 2019" 
          descricao="Supervisor de vendas Região de Curitiba, Londrina e Maringá, gestão de vendas dos promotores, folha ponto, escala, distribuição de materiais, compras, recrutamento e seleção." 
        />

        <CardGrande 
          imagem={Castrolanda}
          nome="Castrolanda Cooperativa Agroindustrial 2016 - 2017" 
          descricao="Assistente Administrativo Setor Gestão de Pessoas​, Recrutamento Safra 2016 PR e SP e Atendimento Benefícios Colaboradores." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

    </div>
  );
}

export default App;
