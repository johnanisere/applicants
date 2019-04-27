import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import ErrorContainer from "../blocks/ErrorContainer";

const App = () => (
  <ErrorContainer>
    <div>
      <FaExclamationTriangle color="red" size={65} />
    </div>
    <div>Error occured :( Please reload</div>
  </ErrorContainer>
);

export default App;
