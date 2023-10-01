import React from "react";
import Reducer from "./Reducer";
// import { Ref } from "./Ref";
// import Input from "./Input";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Jasurbek O'telbayev</h1>
      {/* <Input value={"Jasurbek"} title={"none"} onClick={(e) => console.log(e)}>
        <h2>Jasur</h2>
      </Input> */}
      {/* <Ref /> */}
      <Reducer />
    </React.Fragment>
  );
};

export default App;
