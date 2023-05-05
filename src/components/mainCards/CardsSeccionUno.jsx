import React from 'react';
import styled from 'styled-components';
import DeepEarth from '../../img/desktop/image-deep-earth.jpg';
import NightArcade from '../../img/desktop/image-night-arcade.jpg';
import SoccerTeamVr from '../../img/desktop/image-soccer-team.jpg';
import TheGrid from '../../img/desktop/image-grid.jpg';

import DeepEarthMobile from '../../img/mobile/image-deep-earth.jpg';
import NightArcadeMobile from '../../img/mobile/image-night-arcade.jpg';
import SoccerTeamVrMobile from '../../img/mobile/image-soccer-team.jpg';
import TheGridMobile from '../../img/mobile/image-grid.jpg';

import { SectionCards, Card, TitleCard, DivHover, ImgDestok, ImgMobile} from '../mainCardStyles/CardSeccionStyles';

const CardsSeccionUno = () => {

    const InformationCards = [
        {
            image: DeepEarth,
            imageMobile: DeepEarthMobile,
            name1: "DEEP",
            name2: "EARTH",
        },
        {
            image: NightArcade,
            imageMobile: NightArcadeMobile,
            name1: "NIGHT",
            name2: "ARCADE",
        },
        {
            image: SoccerTeamVr,
            imageMobile: SoccerTeamVrMobile,
            name1: "SOCCER",
            name2: "TEAM VR",
        },
        {
            image: TheGrid,
            imageMobile: TheGridMobile,
            name1: "THE",
            name2: "GRID",
        }
    ]

    return (
        <SectionCards>
                    {InformationCards.map((item) => (
                        <>
                        <DivHover>
                        <figure>
                        <ImgDestok src={item.image} alt={item.name} className='cardDestok'/>
                        <ImgMobile src={item.imageMobile} alt={item.name} className='cardMobile'/>
                        </figure>
                        <Card>
                        <TitleCard>{item.name1}<br></br>{item.name2}</TitleCard>
                        </Card>
                        </DivHover>
                        </>
                    ))}
        </SectionCards>
    )
}

export default CardsSeccionUno;