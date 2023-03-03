import {
  colorBasicBlack,
  colorBorder,
  colorRed,
} from "@/app/common/styles/commonColor";
import styled from "@emotion/styled";

import { BsFillCartXFill, BsFillCartFill } from "react-icons/bs";
import { IHeaderCartProps, ThemeHeaderCart } from "../types/header";

const HeaderCartContainer = styled.div<ThemeHeaderCart>`
  position: relative;
  border: 1px solid ${colorBorder};
  border-radius: 8px;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.isCartHightlighted ? colorBasicBlack : "rgb(250, 250, 250)"};

  transition: 0.3s;

  :hover {
    background-color: ${colorBasicBlack};
  }

  .cart-icon {
    margin-right: 5px;
    display: flex;
  }

  :hover .cart-icon {
    color: ${colorRed};
  }

  .cart-amount {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 8px;
    padding: 2px 6px;
    font-weight: 700;
    background-color: white;
  }

  .cart-el {
    font-size: 8px;
    color: ${(props) =>
      props.isCartHightlighted ? colorRed : colorBasicBlack};
  }

  .cart-el.cart-icon {
    margin-right: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .cart-icon__fullFilled {
    color: ${colorRed};
  }

  animation: ${(props) => props.isCartHightlighted && "bump 300ms ease-out;"};

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const HeaderCartView = ({ isCartHightlighted }: IHeaderCartProps) => {
  return (
    <>
      <HeaderCartContainer isCartHightlighted={isCartHightlighted}>
        <span>
          {/* {cartList.length < 3 ? (
            <BsFillCartFill className="submenuCart-el submenuCart-icon" />
          ) : (
            <BsFillCartXFill className="submenuCart-el submenuCart-icon cart-icon__fullFilled" />
          )} */}
          <BsFillCartFill className="cart-el cart-icon" />
        </span>
        <span className="cart-el">SHOPPING CART</span>
        <span className="cart-amount cart-el">0</span>
      </HeaderCartContainer>
    </>
  );
};

export default HeaderCartView;
