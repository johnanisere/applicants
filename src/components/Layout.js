import React from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import Layout from "../blocks/layout";

const App = ({ children }) => (
  <Layout>
    <Layout.Title>
      <FaUser />
      <span>Applications</span>
    </Layout.Title>
    <Layout.Main>{children}</Layout.Main>
  </Layout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
