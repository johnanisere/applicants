import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchIconBox from "./SearchIconBox";

const SearchBox = styled.div`
  flex: 94%;
  display: flex;
  padding: 0px 10px;
  border: 1px solid #c4cdd5;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: inset 0 1px 0 0 rgba(63, 63, 68, 0.05);
`;

SearchBox.SearchInput = SearchInput;
SearchBox.SearchIconBox = SearchIconBox;

export default SearchBox;
