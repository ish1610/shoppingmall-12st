import React, { useRef, useState } from "react";
import useSearch from "./hooks/useSearch";
import { IHeaderSearchProps } from "./types/header";
import HeaderSearchView from "./views/HeaderSearchView";

const HeaderSearch = () => {
  const searchinputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const { isInputFocus, onClickSearchIcon, setIsInputFoucus } =
    useSearch(searchinputRef);

  const handleSearchInputBlur = () => {
    setIsInputFoucus(false);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:5000/search/api/getData?keyword=" + searchValue)
    //   .then((response) => {
    //     navigate("/searchResult?keyword=" + searchValue, {
    //       state: { result: response.data },
    //     });
    //   });
    //   };
    // console.log(searchValue);
    //   if (location.pathname === "/admin") {
    //     return null;
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const headerSearchProps: IHeaderSearchProps = {
    searchValue,
    isInputFocus,
    searchinputRef,
    onClickSearchIcon,
    onBlurSearchInput: handleSearchInputBlur,
    onChangeSearchInput: handleSearchInputChange,
    onSubmitSearch: handleSearchSubmit,
  };
  return <HeaderSearchView {...headerSearchProps} />;
};

export default HeaderSearch;
