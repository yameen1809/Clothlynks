import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  font-weight: normal;
  border: none;
  transition: 0.3s;
  font-size: 15px;
  font-weight: bolder;

  &:hover {
    font-weight: bolder;
    background-color: white;
    color: rgb(255, 183, 0);
    border: 3px dashed rgb(255, 183, 0);
  }
`;

const invertedButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: 0.3s;
  font-size: 15px;
  font-weight: bolder;
  &:hover {
    font-weight: bold;
    background-color: white;
    color: rgb(255, 183, 0);
    border: 3px dashed rgb(255, 183, 0);
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #357ae8;
  transition: 0.3s;
  margin-left: 5px;
  font-size: 15px;
  font-weight: bolder;

  &:hover {
    background-color: white;
    border: none;
    color: #357ae8;
    border: 3px dashed #357ae8;
  }

  @media screen and (max-width: 413px) and (min-width: 375px) {
    width: 290px;
    font: 13px;
    position: relative;
    top: 10px;
    right: 5px;
  }

  @media screen and (max-width: 420px) and (min-width: 414px) {
    flex-direction: column;
    width: 180px;
    font-size: 13px;
    margin-right: 30px;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
