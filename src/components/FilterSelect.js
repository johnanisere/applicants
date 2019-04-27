import React from "react";
import PropTypes from "prop-types";

import Filter from "../blocks/filter";

const FilterSelect = ({ list, onHandleChange, value, title, name }) => (
  <>
    <Filter.DropDownLabel>
      <span>{title}</span>
    </Filter.DropDownLabel>
    <Filter.DropDownSelectBox>
      <Filter.DropDownSelect
        value={value}
        name={name}
        onChange={onHandleChange}
      >
        <option value="">Select a filter....</option>
        {list.map((val, key) => (
          <option value={val} key={key}>
            {val}
          </option>
        ))}
      </Filter.DropDownSelect>
    </Filter.DropDownSelectBox>
  </>
);

FilterSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  list: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired
};

FilterSelect.defaultProps = {
  list: [],
  value: "",
  onHandleChange: () => {},
  title: "",
  name: ""
};

export default FilterSelect;
