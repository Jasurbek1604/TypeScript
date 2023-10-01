import React, { useState } from "react";

interface Props {
  value: string;
  title?: string;
  onClick(e: React.MouseEvent): void;
  children: React.ReactNode;
}

const Input: React.FC<Props> = (props) => {
  const [count, setCount] = useState<string | number>(0);

  return (
    <React.Fragment>
      <h1>Input</h1>
      <h4>{props.value}</h4>
      <h4>{props.title}</h4>
      <button onClick={(e) => props.onClick(e)}>btn</button>
      {props.children}
      <h1>{count}</h1>
      <button onClick={() => setCount("jasurbek")}>change to str</button>
      <button onClick={() => setCount(45)}>change to num</button>
    </React.Fragment>
  );
};

export default Input;
