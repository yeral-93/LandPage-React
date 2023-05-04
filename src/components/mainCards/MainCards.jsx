import React from 'react';
import CardsSeccionUno from './CardsSeccionUno';
import CardsSeccionDos from './CardsSeccionDos';
import { Information,TituloCreations, BotonSeeAll, SectionMainCards } from '../mainCardStyles/MainCardStyles';

const MainCards = () => {
    return (
        <SectionMainCards>
            <Information>
                <TituloCreations>OUR CREATIONS</TituloCreations>
                <BotonSeeAll>SEE ALL</BotonSeeAll>
            </Information>
            <CardsSeccionUno />
            <CardsSeccionDos />
        </SectionMainCards>
    )
}

export default MainCards;