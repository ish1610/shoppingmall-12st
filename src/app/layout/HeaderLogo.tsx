import React from "react";
import { ROUTE } from "../common/types/route";
import { IHeaderLogoProps } from "./types/header";
import HeaderLogoView from "./views/HeaderLogoView";

const HeaderLogo = () => {
  const headerLogoProps: IHeaderLogoProps = {
    route: { home: ROUTE.HOME },
  };
  return <HeaderLogoView {...headerLogoProps} />;
};

export default HeaderLogo;
