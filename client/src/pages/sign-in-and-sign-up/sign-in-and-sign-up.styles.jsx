import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) and (min-width: 414px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
    padding: 5px;
    > *:first-child {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 413px) and (min-width: 375px) {
    flex-direction: column;
    width: 100vw;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
      padding: 5px;
    }
  }
`;
