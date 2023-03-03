import {
  colorLightBorder,
  colorRed,
  colorWhite,
} from "@/app/common/styles/commonColor";
import { flexCenter } from "@/app/common/styles/flex";
import styled from "@emotion/styled";
import Link from "next/link";

import { FaUserTag, FaHeart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import HeaderCart from "../HeaderCart";
import { IHeaderControllerProps, ThemeHeaderController } from "../types/header";

const HeaderControllerContainer = styled.div<ThemeHeaderController>`
  position: absolute;
  top: 14px;
  right: 0;
  display: flex;
  transition: 0.4s;
`;

const HeaderController = styled.ul`
  font-family: Arial, sans-serif;
  display: flex;

  .controller-item {
    position: relative;
    display: flex;
    align-items: center;
    transition: 0.5;
    cursor: pointer;
  }

  .controller-item::before {
    content: "";
    width: 1px;
    height: 12px;
    background-color: ${colorLightBorder};
    margin: 0 20px;
  }

  .controller-item:first-of-type::before {
    display: none;
  }

  .controller-item-title {
    font-size: 13px;
  }

  .controller-icon {
    font-size: 16px;
    ${flexCenter}
  }

  .controller-item:hover span,
  .controller-icon:hover span {
    color: ${colorRed};
  }
`;

const HeaderControllerView = ({
  route,
  isShowPromotion,
  headerControllerIconRef,
  headerControllerTitleRef,
  children,
}: IHeaderControllerProps) => {
  return (
    <HeaderControllerContainer isShowPromotion={isShowPromotion}>
      <HeaderController>
        <li className="controller-item">
          <Link href={route.myPage} ref={headerControllerIconRef.myPage}>
            <FaUserTag className="controller-icon" />
          </Link>
          <Link
            href={route.myPage}
            ref={headerControllerTitleRef.myPage}
            className="controller-item-title"
          >
            MY PAGE
          </Link>
        </li>
        <li className="controller-item">
          <span ref={headerControllerIconRef.like}>
            <FaHeart className="controller-icon" />
          </span>
          <span
            ref={headerControllerTitleRef.like}
            className="controller-item-title"
          >
            MY LIKE
          </span>
        </li>
        <li className="controller-item">
          <HeaderCart />
        </li>
        <li className="controller-item">
          <Link href={route.login} ref={headerControllerIconRef.log}>
            <FiLogIn className="controller-icon" />
          </Link>
          <Link
            href={route.login}
            ref={headerControllerTitleRef.log}
            className="controller-item-title"
          >
            LOGIN
          </Link>
        </li>
      </HeaderController>

      {children}
    </HeaderControllerContainer>
  );
};

export default HeaderControllerView;
