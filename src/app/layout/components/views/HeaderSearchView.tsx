import {
  colorBasicBlack,
  colorBorder,
  colorLightBlack,
  colorNavy,
  colorRed,
  colorWhite,
} from "@/app/common/styles/commonColor";
import { flexCenter, flexSpacebetween } from "@/app/common/styles/flex";
import styled from "@emotion/styled";
import { IHeaderSearchProps, ThemeHeaderSearch } from "../../types/header";
import { AiOutlineSearch } from "react-icons/ai";

const SearchFormWrap = styled.form<ThemeHeaderSearch>`
  position: relative;
  height: 34px;
  margin-left: 30px;

  input {
    width: ${(props) => (props.isInputFocus ? "190px" : "36px")};
    height: inherit;
    padding: 4px 10px;
    border: 1px solid ${colorBorder};
    border-radius: 5px;
    background-color: ${colorWhite};
    border-color: ${(props) => props.isInputFocus && colorBasicBlack};
    color: ${colorLightBlack};
    font-size: 12px;
    transition: 0.4s;
  }

  button {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: 0.4s;
    opacity: ${(props) => props.isInputFocus && 0};
  }

  svg {
    font-size: 24px;
  }
`;

const HeaderSearchView = ({
  isInputFocus,
  onBlurSearchInput,
  onChangeSearchInput,
  onSubmitSearch,
  onClickSearchIcon,
  searchValue,
  searchinputRef,
}: IHeaderSearchProps) => {
  return (
    <SearchFormWrap onSubmit={onSubmitSearch} isInputFocus={isInputFocus}>
      <input
        ref={searchinputRef}
        value={searchValue}
        onChange={onChangeSearchInput}
        onBlur={onBlurSearchInput}
        placeholder={`${isInputFocus ? "통합검색" : ""}`}
      />
      <button type="submit" onClick={onClickSearchIcon}>
        <AiOutlineSearch />
      </button>
    </SearchFormWrap>
  );
};

export default HeaderSearchView;
