import styled from "styled-components";

import Main from "./Main";
import Title from "./Title";

const Layout = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

Layout.Title = Title;
Layout.Main = Main;

export default Layout;
