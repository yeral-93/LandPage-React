import React from 'react';
import styled from 'styled-components';

export const SectionCards = styled.section`
display: flex;
width: 100%;
margin: 0 auto;
justify-content: space-between;
margin-bottom: 20px;

@media screen and (max-width: 375px){
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
`;




export const ImgDestok = styled.img`
@media screen and (max-width: 375px){
    display: none;
}
`;

export const ImgMobile = styled.img`
display: none;
@media screen and (max-width: 375px){
    width: 350px;
    margin-bottom: 5px;
    display: block;
    transform: translateX(-70px);
}
`;

export const ImgMobileTwo = styled.img`
display: none;
@media screen and (max-width: 375px){
    width: 350px;
    margin-bottom: 25px;
    display: block;
    margin-top: -20px;
    transform: translateX(-70px);
}
`;

export const DivHover = styled.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
@media screen and (max-width: 375px){
    width: 280px;
    left: -80px;
    display: flex;
    flex-direction: column;

}
`;

export const Card = styled.div`
width: 256px;
height: 450px;
position: absolute;
display: flex;
justify-content: space-between;
background: linear-gradient(to top, black, 20%, transparent);
color: white;
transition: 0.5s;
overflow: hidden;
cursor: pointer;
gap: 20px;

&:hover{
background: linear-gradient(to top, hsla(0, 0%, 100%, 0.450), hsla(0, 0%, 100%, 0.450));
color: black;
}

@media screen and (max-width: 375px){
    width: 350px;
    height: 130px;
    transform: translateX(-70px);
    background: linear-gradient(to right, black, 30%, transparent);
}
`;

export const CardTwo = styled.div`
width: 256px;
height: 450px;
position: absolute;
display: flex;
justify-content: space-between;
background: linear-gradient(to top, black, 20%, transparent);
color: white;
transition: 0.5s;
overflow: hidden;
cursor: pointer;
gap: 20px;

&:hover{
background: linear-gradient(to top, hsla(0, 0%, 100%, 0.450), hsla(0, 0%, 100%, 0.450));
color: black;
}

@media screen and (max-width: 375px){
    width: 350px;
    height: 130px;
    transform: translate(-70px, -20px);
    background: linear-gradient(to right, black, 30%, transparent);
}
`;

export const TitleCard = styled.p`
font-size: 26px;
width: 150px;
line-height: 30px;
margin-top: 360px;
margin-left: 40px;
font-weight: 600;

@media screen and (max-width: 375px){
    transform: translate(-15px,-305px);
    font-size: 25px;
    line-height: 30px;
    width: 150px;
}
`;