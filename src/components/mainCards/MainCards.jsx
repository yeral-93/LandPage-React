import React from 'react';
import styled from 'styled-components';
import CardsSeccionUno from './CardsSeccionUno';
import CardsSeccionDos from './CardsSeccionDos';


const Information = styled.section`
background-color: yellow;
display: flex;
width: 100%;
justify-content: space-evenly;
`;

const MainCards = () => {
    return (
        <section className='sectionMainCards'>
            <Information>
                <p>OUR CREATIONS</p>
                <button>SEE ALL</button>
            </Information>
            <CardsSeccionUno />
            <CardsSeccionDos />
        </section>
    )
}

export default MainCards;