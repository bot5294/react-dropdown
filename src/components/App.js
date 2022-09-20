import React, { useState } from "react";
import Dropdown from "./Dropdown";
function App() {
  let optionList = ["Yes", "Probably Not"];
  // root level hooks
  const [list, setList] = useState(optionList);
  // passed as props to Dropdown component
  return <Dropdown options={[list, setList]} />;
}

export default App;
