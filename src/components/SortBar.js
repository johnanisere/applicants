import React from "react";
import PropTypes from "prop-types";

import SortBox from "../blocks/sortBox";

const App = ({ value, list, onHandleChange, name }) => (
  <SortBox>
    <SortBox.Label>
      <span>Sort By: </span>
    </SortBox.Label>
    <SortBox.DropDown>
      <SortBox.Select value={value} onChange={onHandleChange} name={name}>
        <option value="">Sort ...</option>
        {list.map((value, key) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </SortBox.Select>
    </SortBox.DropDown>
  </SortBox>
);

App.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired
};

App.defaultProps = {
  name: "",
  list: [],
  value: "",
  onHandleChange: () => {}
};

export default App;
