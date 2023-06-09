import React from 'react';
import styled from 'styled-components';

export const SectionMainCards = styled.section`
width: 100%;
padding: 0px 85px 80px 85px;

@media screen and (max-width: 375px){
    width: 100%;
}
`;

export const Information = styled.section`
display: flex;
width: 97%;
margin: 0 auto;
justify-content: space-between;
margin-bottom: 40px;

@media screen and (max-width: 375px){
margin-bottom: 10px;
}
`;

export const TituloCreations = styled.p`
font-size: 28px;
font-weight: bold;
width: 400px;

@media screen and (max-width: 375px){
    font-size: 20px;
    transform: translate(20px, 30px);
    margin-bottom: 45px;
    margin-top: 30px;
}
`;

export const BotonSeeAll = styled.button`
background-color: var(--White);
border: 2px solid var(--Black);
cursor: pointer;
padding: 7px 30px 7px 30px;
border-radius: 3px;
font-weight: bold;
transition: 1s;
color: black;
letter-spacing: 3px;

&:hover{
    background-color: var(--Black);
    color: var(--White);
}

@media screen and (max-width: 375px){
    position: absolute;
    transform: translate(40px, 1200px);
}
`;