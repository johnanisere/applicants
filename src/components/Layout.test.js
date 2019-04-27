import React from "react";
import { shallow } from "enzyme";

import Layout from "./Layout";
import LayoutContainer from "../blocks/layout";

it("Layout component exists", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.exists()).toBe(true);
});

it("Layout component renders", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper).toMatchSnapshot();
});

it(`Layout should contain "LayoutContainer", "LayoutContainer.Title", "LayoutContainer.Main", `, () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find(LayoutContainer)).toHaveLength(1);
  expect(wrapper.find(LayoutContainer.Main)).toHaveLength(1);
  expect(wrapper.find(LayoutContainer.Title)).toHaveLength(1);
});
