import React from 'react';
import {ContainerBotao, ImgBotao} from './styles'

function ImagemButton(props) {
    return (
        <ContainerBotao>
            <ImgBotao src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerBotao>

    )
}

export default ImagemButton;