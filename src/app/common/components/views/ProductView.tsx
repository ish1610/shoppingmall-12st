import styled from "@emotion/styled";
import Image from "next/image";
import {
  colorBasicBlack,
  colorBorder,
  colorLightBorder,
  colorLightRed,
} from "../../styles/commonColor";

import {
  BsFillCartDashFill,
  BsFillCartPlusFill,
  BsHeart,
} from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { IProductProps } from "../../types/common";

const ProductContainer = styled.div`
  position: relative;
  width: 200px;

  .product__mall {
    font-size: 12px;
    margin: 12px 0 17px 0;
    color: ${colorBorder};
  }

  .product__name {
    font-size: 14px;
    height: calc(14px * 2 * 1.4);
    overflow: hidden;
    margin-bottom: 10px;
  }

  .product__rawPrice {
    padding-top: 10px;
    border-top: 1px solid ${colorLightBorder};
    color: ${colorBorder};
    font-size: 13px;
    text-decoration: line-through;
  }

  .product__price {
    font-weight: 700;
    margin-bottom: 20px;
  }

  .percent {
    color: ${colorLightRed};
    margin-right: 10px;
    font-size: 14px;
  }

  .product__count {
    display: flex;
    align-items: center;
    /* color: #2c2a29; */
  }

  .product__icon {
    font-size: 14px;
  }

  .product__count span {
    margin: 30px 0 10px;
    font-size: 12px;
  }

  .product__count span:last-of-type {
    margin-right: 0;
  }
`;

const ProductImageWrap = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductCartButton = styled.button`
  position: absolute;
  right: 0;
  font-size: 24px;

  .cart__add {
    color: ${colorBasicBlack};
    bottom: 0;
  }

  .cart__remove {
    color: ${colorBorder};
    bottom: 100px;
  }
`;

const ProductView = ({
  productInfo,
  cartAddIconRef,
  cartRemoveIconRef,
  productdisCountedPrice,
}: IProductProps) => {
  const { discount, image, mallName, name, price, reviewCount, sellCount } =
    productInfo;
  return (
    <ProductContainer>
      <ProductImageWrap>
        <Image src="" alt="" />
      </ProductImageWrap>

      <p className="product__mall">[ {mallName} ]</p>
      <p className="product__name">{name}</p>
      <p className="product__rawPrice">{productdisCountedPrice}</p>
      <p className="product__price">
        <span className="percent">{discount}</span>
        {price}
      </p>
      <div className="product__count">
        {/* 아이콘 수정하기 (하트 아이콘 -> 판매 아이콘) */}
        <BsHeart className="product__icon" /> <span>{sellCount}</span>
        <GoComment className="product__icon" /> <span>{reviewCount}</span>
      </div>

      <ProductCartButton ref={cartAddIconRef}>
        <BsFillCartPlusFill
          className="cart__add"
          //   onClick={() => handleAddCart(productInfo, 1)}
        />
      </ProductCartButton>

      <ProductCartButton ref={cartRemoveIconRef}>
        <BsFillCartDashFill
          className="cart__remove"
          //   onClick={() => handleRemoveCart(productInfo.item_no)}
        />
      </ProductCartButton>
    </ProductContainer>
  );
};

export default ProductView;
