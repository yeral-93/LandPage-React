import styled from "styled-components";

export const FooterGlobal = styled.div`
  background-color: var(--Black);
  padding: 20px 130px 40px 130px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 40px;
    width: 437px;
    padding: 60px 0px 70px 0px;
    margin: 69px 0px 0px 0px;
    p {
      font-size: 20px;
    }
  }
`;
