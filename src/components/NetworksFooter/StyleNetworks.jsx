import styled from "styled-components";

export const Networks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;

  ul {
    display: flex;
    gap: 15px;
    align-items: center;
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
  p {
    color: var(--White);
    font-weight: 400;
  }

  @media screen and (max-width: 375px){
display: flex;
flex-direction: column;
align-items: center;
}
`;

