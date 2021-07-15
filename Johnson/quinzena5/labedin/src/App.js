import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfileImage from './components/img/321.PNG'
import EmailImage from './components/img/email1.jpg'
import LocationImage from './components/img/localizacao.jpg'
import JobLocation from './components/img/meme.jfif'
import JobLocationTwo from './components/img/app.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfileImage}
          nome="Astrodev" 
          descricao="Oi, eu sou o Alexandre, estudante e fã da Labenu, amo artes e tecnlogia, quero muito conciliar os dois."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={EmailImage}
        nome="E-mail:"
        descricao="alexandre.yukon@gmail.com"

        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={LocationImage}
        nome="Endereço:"
        descricao="Castro - PR"

        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={JobLocation} 
          nome="Memelândia" 
          descricao="Fabricante de memes." 
        />
        
        <CardGrande 
          imagem={JobLocationTwo} 
          nome="Figurinhas S.A" 
          descricao="Design de figurinhas para app de mensagens." 
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
