import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bolder;
  bottom: 8px;
  color: white;
  margin-bottom: 2px;
`;
