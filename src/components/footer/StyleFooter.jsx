import styled from "styled-components";

export const FooterGlobal = styled.div`
  background-color: var(--Black);
  padding: 20px 130px 40px 130px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 40px;
    width: 100%;
    padding: 60px 0px 100px 0px;

    p {
      font-size: 25px;
    }
  }
`;
