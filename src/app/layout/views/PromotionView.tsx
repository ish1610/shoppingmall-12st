import Inner from "@/app/common/components/Inner";
import {
  colorBasicBlack,
  colorRed,
  colorWhite,
} from "@/app/common/styles/commonColor";
import { flexCenter } from "@/app/common/styles/flex";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IPromotionProps } from "../types/promotion";

const PromotionContainer = styled.div`
  background-color: ${colorBasicBlack};
`;

const promotionInner = css`
  ul {
    ${flexCenter}
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 42px;
    font-size: 12px;
    color: ${colorWhite};
    cursor: pointer;
  }

  li::before {
    content: "";
    width: 1px;
    height: 12px;
    background-color: #ccc;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto -30px;
  }

  li:first-of-type::before {
    margin-left: 0;
    display: none;
  }

  span {
    color: ${colorRed};
    font-size: 12px;
    font-weight: 700;
    margin: 0 3px;
  }
`;

const PromotionView = ({ promotionRef }: IPromotionProps) => {
  return (
    <PromotionContainer ref={promotionRef}>
      <Inner styles={promotionInner}>
        <ul>
          <li>
            12st 신규가입 <span>15%</span> 할인 쿠폰
          </li>
          <li>
            [삼성카드] <span>14만원 캐시백</span> 프로모션
          </li>
          <li>
            [카카오페이] 5 / 8 / 20 이상 결제 시{" "}
            <span>3천/4천/1만 즉시 할인</span>
          </li>
        </ul>
      </Inner>
    </PromotionContainer>
  );
};

export default PromotionView;
