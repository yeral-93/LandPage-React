import styled from "styled-components"
import ImgB from '../../img/desktop/image-hero.jpg'
import ImgMobile from '../../img/mobile/image-hero.jpg'

export const StyleBa = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgB});
    min-height: 500px;
    height: 100vh;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 375px) {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgMobile});
        min-height: 500px;
        height: 100vh;
        background-position: center;
        background-size: cover;
    }
`

export const StyleContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const StyleItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const StyleH1 = styled.h1`
  width: 660px;
  font-size: 4.5rem;
  line-height: 4rem;
  color: var(--White);
  border: 2.3px solid var(--White);
  letter-spacing: 5px;
  padding: 30px;

  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: 2.2rem;
    line-height: 2.3rem;
    letter-spacing: 0.1rem;
  }
`;

/* 

export const StyleItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const StyleH1 = styled.h1`
  width: 630px;
  font-size: 4.3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  margin: 55px;
  color: var(--White);
  border: 2px solid var(--White);
  letter-spacing: 5px;
  padding: 30px;

  @media screen and (max-width: 375px) {
    margin: 0;
    width: 100%;
    font-size: 2.1rem;
    line-height: 2.1rem;
    letter-spacing: 0.1rem;
    transform: translateY(-35%);
  }
`;
*/