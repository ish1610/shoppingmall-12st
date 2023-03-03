import React, { useRef, useState } from "react";
import { IHeaderCartProps } from "./types/header";
import HeaderCartView from "./views/HeaderCartView";

const HeaderCart = () => {
  const [isCartHightlighted, setIsCartHightlighted] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const cartModalRef = useRef(null);

  const headerCartProps: IHeaderCartProps = {
    isCartHightlighted,
  };

  return <HeaderCartView {...headerCartProps} />;
};

export default HeaderCart;
