import React from 'react';
import styled from 'styled-components';

export const SectionMainCards = styled.section`
width: 100%;
padding: 0px 85px 80px 85px;
`;

export const Information = styled.section`
display: flex;
width: 97%;
margin: 0 auto;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 50px;
`;

export const TituloCreations = styled.p`
font-size: 28px;
font-weight: bold;
`;

export const BotonSeeAll = styled.button`
background-color: white;
border: 2px solid black;
cursor: pointer;
padding: 7px 30px 7px 30px;
border-radius: 3px;
font-weight: bold;
transition: 1s;
color: black;

&:hover{
    background-color: black;
    color: white;
}
`;