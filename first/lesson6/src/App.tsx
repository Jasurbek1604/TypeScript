import React from "react";
import Props from "./components/Props";
import Useref from "./components/Useref";
import Usereducer from "./components/Usereducer";

const App: React.FC = () => {
  return (
    <div>
      <Props onChange={() => console.log("Jasurbek")} name="jasurbek" age={20}>
        <h2>Jasubrek</h2>
      </Props>
      <Useref />
      <Usereducer />
    </div>
  );
};

export default App;
