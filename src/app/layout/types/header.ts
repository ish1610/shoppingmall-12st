import { ROUTE } from "@/app/common/types/route";
import React, { MutableRefObject, ReactNode } from "react";

export interface IHeaderLogoProps {
  route: {
    home: ROUTE.HOME;
  };
}

export type ManageRefArrayFn = (
  index: number,
  ref: MutableRefObject<HTMLAnchorElement[]>
) => (refEl: HTMLAnchorElement) => void;

export interface IHeaderControllerProps {
  route: {
    login: ROUTE.LOGIN;
    myPage: ROUTE.MYPAGE;
  };

  isShowPromotion: boolean;
  children?: ReactNode;
  headerControllerTitleRef: {
    myPage: (refEl: HTMLAnchorElement) => void;
    like: (refEl: HTMLAnchorElement) => void;
    log: (refEl: HTMLAnchorElement) => void;
  };
  headerControllerIconRef: {
    myPage: (refEl: HTMLAnchorElement) => void;
    like: (refEl: HTMLAnchorElement) => void;
    log: (refEl: HTMLAnchorElement) => void;
  };
}

export interface IHeaderSearchProps {
  searchValue: string;
  isInputFocus: boolean;
  searchinputRef: React.RefObject<HTMLInputElement>;
  onClickSearchIcon: () => void;
  onBlurSearchInput: () => void;
  onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IHeaderLayoutProps {
  isShowPromotion: boolean;
}

export interface IHeaderCartProps {
  isCartHightlighted: boolean;
}

export type ThemeHeaderController = {
  isShowPromotion: boolean;
};

export type ThemeHeaderSearch = {
  isInputFocus: boolean;
};

export type ThemeHeaderCart = {
  isCartHightlighted: boolean;
};

export type ThemeHeaderLayout = {
  isShowPromotion: boolean;
};
