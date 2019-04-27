import React from "react";
import { shallow } from "enzyme";

import FilterAndSort from "./FilterAndSort";

it("FilterAndSort component exists", () => {
  const wrapper = shallow(<FilterAndSort />);
  expect(wrapper.exists()).toBe(true);
});

it("FilterAndSort component renders", () => {
  const wrapper = shallow(<FilterAndSort />);
  expect(wrapper).toMatchSnapshot();
});
