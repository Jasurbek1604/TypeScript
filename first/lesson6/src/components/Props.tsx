import React, { ReactNode, useState } from "react";

interface Props {
  name: string;
  age: number;
  onChange(e: React.MouseEvent): void;
  children: ReactNode;
}

// const Input:React.FC<Props> = (props) => {
const Input = ({ name, age, onChange, children }: Props) => {
  const [count, setCount] = useState<number | string>(0);
  return (
    <div onClick={(e) => onChange(e)}>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {children}

      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount("none")}>change to str</button>
        <br />
        <button onClick={() => setCount(5)}>change to num</button>
      </div>
    </div>
  );
};

export default Input;
