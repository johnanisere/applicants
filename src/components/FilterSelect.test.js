import React from "react";
import { shallow } from "enzyme";

import Filter from "../blocks/filter";
import FilterSelect from "./FilterSelect";

it("FilterSelect component exists", () => {
  const wrapper = shallow(<FilterSelect />);
  expect(wrapper.exists()).toBe(true);
});

it("FilterSelect component renders", () => {
  const wrapper = shallow(<FilterSelect />);
  expect(wrapper).toMatchSnapshot();
});

it(`FilterSelect should contain "Filter.DropDownLabel", "Filter.DropDownSelectBox","Filter.DropDownSelect" `, () => {
  const wrapper = shallow(<FilterSelect />);
  expect(wrapper.find(Filter.DropDownLabel)).toHaveLength(1);
  expect(wrapper.find(Filter.DropDownSelect)).toHaveLength(1);
  expect(wrapper.find(Filter.DropDownSelectBox)).toHaveLength(1);
});
