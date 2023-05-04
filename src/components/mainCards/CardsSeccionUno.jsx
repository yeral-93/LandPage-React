import React from 'react';
import styled from 'styled-components';
import DeepEarth from '../../img/desktop/image-deep-earth.jpg';
import NightArcade from '../../img/desktop/image-night-arcade.jpg';
import SoccerTeamVr from '../../img/desktop/image-soccer-team.jpg';
import TheGrid from '../../img/desktop/image-grid.jpg';
import { SectionCards, Card, TitleCard, DivHover} from '../mainCardStyles/CardSeccionStyles';


const CardsSeccionUno = () => {

    const InformationCards = [
        {
            image: DeepEarth,
            name: "DEEP EARTH",
        },
        {
            image: NightArcade,
            name: "NIGHT ARCADE",
        },
        {
            image: SoccerTeamVr,
            name: "SOCCER TEAM VR",
        },
        {
            image: TheGrid,
            name: "THE GRID",
        }
    ]

    return (
        <SectionCards>
                    {InformationCards.map((item) => (
                        <>
                        <DivHover>
                        <figure>
                        <img src={item.image} alt={item.name} />
                        </figure>
                        <Card>
                        <TitleCard>{item.name}</TitleCard>
                        </Card>
                        </DivHover>
                        </>
                    ))}
        </SectionCards>
    )
}

export default CardsSeccionUno;