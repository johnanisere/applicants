import React from "react";
import { shallow } from "enzyme";

import FilterBar from "./FilterBar";

it("FilterSelect component exists", () => {
  const wrapper = shallow(<FilterBar />);
  expect(wrapper.exists()).toBe(true);
});

it("FilterSelect component renders", () => {
  const wrapper = shallow(<FilterBar />);
  expect(wrapper).toMatchSnapshot();
});
