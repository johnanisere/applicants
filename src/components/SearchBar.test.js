import React from "react";
import { shallow } from "enzyme";

import SearchBar from "./SearchBar";
import SearchBox from "../blocks/searchBox";

it("SearchBar component exists", () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.exists()).toBe(true);
});

it("SearchBar component renders", () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper).toMatchSnapshot();
});

it(`SearchBar should contain "SearchBox", "SearchBox.SearchIconBox", "SearchBox.SearchInput", `, () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.find(SearchBox)).toHaveLength(1);
  expect(wrapper.find(SearchBox.SearchInput)).toHaveLength(1);
  expect(wrapper.find(SearchBox.SearchIconBox)).toHaveLength(1);
});
