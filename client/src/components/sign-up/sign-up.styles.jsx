import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 413px) and (min-width: 375px) {
    flex-direction: column;
    width: 300px;
    > *:first-child {
      padding-top: 20px;
      margin-left: 2px;
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
