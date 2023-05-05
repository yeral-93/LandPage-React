import styled from "styled-components";

export const LinkFooter = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: var(--White);
  margin: 20px 0px 0px 0px;
  font-weight: 600;
  ul {
    display: flex;
    gap: 15px;
  }

  li {
    display: inline-block;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--White);
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform 0.6s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom center;
    }
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

export const ImgFooter = styled.img`
  width: 165px;
  height: auto;

  @media screen and (max-width: 375px) {
    width: 200px;
  }
`;
