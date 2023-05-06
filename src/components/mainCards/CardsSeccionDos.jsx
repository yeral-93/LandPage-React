import React from 'react';
import FromUpAbove from '../../img/desktop/image-from-above.jpg';
import PocketBorealis from '../../img/desktop/image-pocket-borealis.jpg';
import TheCuriosity from '../../img/desktop/image-curiosity.jpg';
import MakeItFisheye from '../../img/desktop/image-fisheye.jpg';

import FromUpAboveMobile from '../../img/mobile/image-from-above.jpg';
import PocketBorealisMobile from '../../img/mobile/image-pocket-borealis.jpg';
import TheCuriosityMobile from '../../img/mobile/image-curiosity.jpg';
import MakeItFisheyeMobile from '../../img/mobile/image-fisheye.jpg';

import { SectionCards, CardTwo, TitleCard, DivHover, ImgDestok, ImgMobileTwo } from '../mainCardStyles/CardSeccionStyles'

const CardsSeccionDos = () => {

    const InformationCards = [
        {
            image: FromUpAbove,
            imageMobile: FromUpAboveMobile,
            name1: "FROM UP",
            name2: "ABOVE VR",
        },
        {
            image: PocketBorealis,
            imageMobile: PocketBorealisMobile,
            name1: "POCKET",
            name2: "BOREALIS",
        },
        {
            image: TheCuriosity,
            imageMobile: TheCuriosityMobile,
            name1: "THE",
            name2: "CURIOSITY",
        },
        {
            image: MakeItFisheye,
            imageMobile: MakeItFisheyeMobile,
            name1: "MAKE IT",
            name2: "FISHEYE",
        }
    ]

    return (
        <SectionCards>
                    {InformationCards.map((item, index2) => (
                        <>
                        <DivHover>
                        <ImgDestok key={`${item.name2}-${index2}`} src={item.image} alt={item.name2} />
                        <ImgMobileTwo key={`${item.name2}-${index2}`} src={item.imageMobile} alt={item.name2} />
                        <CardTwo>
                        <TitleCard>{item.name1}<br></br>{item.name2}</TitleCard>
                        </CardTwo>
                        </DivHover>
                        </>
                    ))}
        </SectionCards>
    )
}
           
export default CardsSeccionDos;