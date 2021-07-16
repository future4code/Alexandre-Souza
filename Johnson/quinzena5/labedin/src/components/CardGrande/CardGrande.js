import React from 'react';
import {MainContainer, Img} from './styles'

function CardGrande(props) {
    return (
        <MainContainer>
            <Img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </MainContainer>
    )
}

export default CardGrande;