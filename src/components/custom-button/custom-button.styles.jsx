import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: rgb(255, 183, 0);
    border: 3px dashed rgb(255, 183, 0);
    font-weight: bolder;
    padding: 0 35px 0 35px;
  }
`;

const invertedButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: rgb(255, 183, 0);
    border: 3px dashed rgb(255, 183, 0);
    font-weight: bolder;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  transition: 0.3s;
  border: 1px solid #4285f4;

  &:hover {
    background-color: white;
    color: #205dbe;
    border: 3px dashed #205dbe;
    font-weight: bolder;
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
