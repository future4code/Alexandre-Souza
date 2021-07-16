import React from 'react';
import { MainContainerDois, Img, MargemCard, Bloco } from './styles';

function CardPequeno(props) {
    return (
        <MainContainerDois>
            <Img src={ props.imagem } />
            <Bloco>
                <MargemCard>{ props.nome }</MargemCard>
                <p>{ props.descricao }</p>
            </Bloco>
        </MainContainerDois>
    )
}

export default CardPequeno;