import styled from "styled-components"

export const Container = styled.div`

`

export const Nav = styled.nav`
margin: 0 auto;
width: 90%;
max-width: 1200px;
overflow: hidden;

--state-close: scale(0); /* no se va a mostrar */
--state-hamburguer: scale(1);  /* se va a mostrar */
--state-menu: translate(-100%);
padding: 40px 0;
display: grid;
z-index: 1;
justify-content: space-between;
align-items: center;
grid-template-columns: repeat(2, max-content);
:target{
    --state-menu: translate(0);
    --state-close: scale(1);
    --state-hamburguer: scale(0);
}
img{
    font-size: 150px;
    @media (min-width: 768px) {
        font-size: 10.5rem;
    }
}

@media (min-width: 768px) {
    padding: 55px 0 10px 0;

    --state-hamburguer: scale(0);
    --state-menu: translate(0);

    :target{
    --state-close: scale(0);
}
}
`

export const StyleLinks = styled.ul`
background-color: var(--Black);
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;

display: grid;
align-content: center;
gap: 2em;
padding-left: 5%;

transform: var(--state-menu);
transition: .3s transform;
li{
color: var(--White);
font-size: 1.6rem;
text-transform: uppercase;
letter-spacing: 2px;

position: relative;    
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
@media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: none;    
}
}

@media (min-width: 768px) {
    background-color: unset;
    position: unset;
    padding: 0;
    gap: 1.5em;
    grid-auto-flow: column;

    transform: unset;

    grid-column: -2/-1;
    grid-row: 1/2;
}
`

export const Hamburguer = styled.a`
cursor: pointer;
grid-column: -2/-1;
grid-row: 1/2;

transform: var(--state-hamburguer);
transition: .4s transform;
img{
    width: 30px;
}
`

export const Close = styled.a`
cursor: pointer;
grid-column: -2/-1;
grid-row: 1/2;

transform: var(--state-close);
transition: .4s transform;
img{
    width: 40px;
}
`

// export const Nav = styled.nav`
//     background: transparent;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 55px 85px 10px 85px;
//     ul{
//         display: flex;
//         gap: 26px;
//         align-items: center;
        
//         @media screen and (max-width: 375px) {
//         display: none;
//     }
//     }
//     li{
//         position: relative;
//         font-size: 'Alata';
//         color: var(--White);
//         cursor: pointer;
//         ::before{
//             content: "";
//             background-color: var(--White);
//             position: absolute;
//             left: 0.6rem;
//             bottom: -0.6rem;
//             align-items: center;
//             height: 2px;
//             width: 0;
//             transition: 0.3s ease-in-out;
//         }
//         :hover::before{
//             content: "";
//             background-color: var(--White);
//             position: absolute;
//             left: 0.6rem;
//             bottom: -0.6rem;
//             height: 3px;
//             width: 75%;
//         }
//     }
// `
// export const Mobileicon = styled.figure`
//     display: none;

//     @media screen and (max-width: 375px) {
//         display: flex;
//         align-items: center;
//         cursor: pointer;
//         img{
//             margin: 0.5rem;
//         }
//     }
// `
