import styled from "styled-components"

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 55px 85px 10px 85px;
    ul{
        display: flex;
        gap: 26px;
        align-items: center;
    }
    li{
        position: relative;
        font-size: 'Alata';
        color: var(--White);
        cursor: pointer;
        ::before{
            content: "";
            background-color: var(--White);
            position: absolute;
            left: 0.6rem;
            bottom: -0.6rem;
            align-items: center;
            height: 2px;
            width: 0;
            transition: 0.3s ease-in-out;
        }
        :hover::before{
            content: "";
            background-color: var(--White);
            position: absolute;
            left: 0.6rem;
            bottom: -0.6rem;
            height: 3px;
            width: 75%;
        }
    }
    @media screen and (max-width: 375px) {
        display: none;
    }
`
export const Mobileicon = styled.figure`
    display: none;

    @media screen and (max-width: 375px) {
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
            margin: 0.5rem;
        }
    }
`
// @media screen and (max-width: 375px) {
// display: grid;
// justify-content: space-between;
// align-items: center;
// grid-template-columns: repeat(2, max-content);
// }