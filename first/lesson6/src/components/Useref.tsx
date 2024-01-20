import React, { useRef } from "react";

const Useref: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current?.value)} ref={btnRef}>
        button
      </button>
    </div>
  );
};

export default Useref;
