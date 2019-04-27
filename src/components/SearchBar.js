import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import SearchBox from "../blocks/searchBox";

const Search = ({ searchBy, name, value, onHandleChange, isDisabled }) => (
  <SearchBox>
    <SearchBox.SearchIconBox>
      <FaSearch />
    </SearchBox.SearchIconBox>
    <SearchBox.SearchInput
      name={name}
      value={value}
      disabled={isDisabled}
      onChange={onHandleChange}
      placeholder={!isDisabled ? `Search by ${searchBy}` : `Select a filter`}
    />
  </SearchBox>
);

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  searchBy: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired
};

Search.defaultProps = {
  name: "",
  value: "",
  searchBy: "",
  isDisabled: false,
  onHandleChange: () => {}
};

export default Search;
