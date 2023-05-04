import React from 'react';
import FromUpAbove from '../../img/desktop/image-from-above.jpg';
import PocketBorealis from '../../img/desktop/image-pocket-borealis.jpg';
import TheCuriosity from '../../img/desktop/image-curiosity.jpg';
import MakeItFisheye from '../../img/desktop/image-fisheye.jpg';
import { SectionCards, Card, TitleCard, DivHover } from '../mainCardStyles/CardSeccionStyles'

const CardsSeccionDos = () => {

    const InformationCards = [
        {
            image: FromUpAbove,
            name: "FROM UP ABOVE VR",
        },
        {
            image: PocketBorealis,
            name: "POCKET BOREALIS",
        },
        {
            image: TheCuriosity,
            name: "THE CURIOSITY",
        },
        {
            image: MakeItFisheye,
            name: "MAKE IT FISHEYE",
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
           
export default CardsSeccionDos;