import styled from "styled-components";

import FilterBox from "./FilterBox";

const SearchAndFilterBox = styled.div`
  display: flex;
  align-items: stretch;
  height: 36px;
  flex: 2;
`;

SearchAndFilterBox.FilterBox = FilterBox;

export default SearchAndFilterBox;
