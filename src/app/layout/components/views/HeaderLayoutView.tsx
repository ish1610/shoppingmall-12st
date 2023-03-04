import Inner from "@/app/common/components/Inner";
import { colorBasicBlack, colorWhite } from "@/app/common/styles/commonColor";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import HeaderController from "../HeaderController";
import HeaderLogo from "../HeaderLogo";
import Promotion from "../Promotion";
import { IHeaderLayoutProps, ThemeHeaderLayout } from "../../types/header";

const HeaderLayoutContanier = styled.header<ThemeHeaderLayout>`
  position: fixed;
  width: 100%;
  height: ${(props) => (props.isShowPromotion ? "160px" : "120px")};

  background-color: ${colorWhite};

  border-bottom: 1px solid ${colorBasicBlack};
`;

const showPromotion = css``;

const hidePromotion = css`
  transform: translateY(-42px);
`;

const HeaderLayoutView = ({ isShowPromotion }: IHeaderLayoutProps) => {
  return (
    <HeaderLayoutContanier isShowPromotion={isShowPromotion}>
      <Promotion />
      <Inner styles={isShowPromotion ? showPromotion : hidePromotion}>
        <HeaderLogo />
        <HeaderController />

        {/* <MainMenu isShowPromotion={isShowPromotion} /> */}
      </Inner>
    </HeaderLayoutContanier>
  );
};

export default HeaderLayoutView;
