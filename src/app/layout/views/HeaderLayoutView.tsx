import Inner from "@/app/common/components/Inner";
import { colorWhite } from "@/app/common/styles/commonColor";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import HeaderController from "../HeaderController";
import HeaderLogo from "../HeaderLogo";
import Promotion from "../Promotion";
import { IHeaderLayoutProps } from "../types/header";

const HeaderLayoutContanier = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${colorWhite};
`;

const showPromotion = css`
  height: 118px;
  background-color: ${colorWhite};
`;

const hidePromotion = css`
  transform: translateY(-42px);
  height: 85px;
  background-color: ${colorWhite};
`;

const HeaderLayoutView = ({ isShowPromotion }: IHeaderLayoutProps) => {
  return (
    <HeaderLayoutContanier>
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
