import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 10%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    padding: 2;
    margin-bottom: 2px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 18px;

  &:hover {
    background-color: white;
    color: black;
    border: 3px dashed rgb(255, 183, 0);
    font-weight: bolder;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 5px;
    font-size: 15px;
  }
`;
