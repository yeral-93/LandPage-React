import styled from "styled-components";

export const LinkFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  p {
    font-weight: 400;
  }

  @media screen and (max-width: 375px){
display: flex;
flex-direction: column;
}
`;
