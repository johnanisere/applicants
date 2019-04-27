import React from "react";
import { shallow } from "enzyme";

import SortBar from "./SortBar";
import SortBox from "../blocks/sortBox";

it("SortBar component exists", () => {
  const wrapper = shallow(<SortBar />);
  expect(wrapper.exists()).toBe(true);
});

it("SortBar component renders", () => {
  const wrapper = shallow(<SortBar />);
  expect(wrapper).toMatchSnapshot();
});

it(`SortBar should contain "SortBox", "SortBox.Label", "SortBox.DropDown", "SortBox.Select"`, () => {
  const wrapper = shallow(<SortBar />);
  expect(wrapper.find(SortBox)).toHaveLength(1);
  expect(wrapper.find(SortBox.Label)).toHaveLength(1);
  expect(wrapper.find(SortBox.Select)).toHaveLength(1);
  expect(wrapper.find(SortBox.DropDown)).toHaveLength(1);
});
