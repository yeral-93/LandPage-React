import React from 'react';
import styled from 'styled-components';

export const SectionCards = styled.section`
display: flex;
aling-items: center;
width: 100%;
margin: 0 auto;
justify-content: space-between;
margin-bottom: 20px;
`;

export const DivHover = styled.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
aling-items: center;
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
`;

export const TitleCard = styled.p`
font-size: 26px;
width: 150px;
line-height: 30px;
margin-top: 360px;
margin-left: 40px;
font-weight: 600;
`;