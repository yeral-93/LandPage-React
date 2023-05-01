import styled from "styled-components"

export const StylesNav = styled.nav`
    background-color: #24b26b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 85px 10px 80px;
    ul{
        display: flex;
        gap: 20px;
        align-items: center;
    }
    li{
        font-size: 'Alata';
        :hover{
        color: #24b26b;
        text-decoration: underline; 
    }
    }
`
export const Mobileicon = styled.figure`
    display: none;

    @media screen and (max-width: 475px) {
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
            margin: 0.5rem;
        }
    }
`