import React, { useRef } from "react";

export const Ref: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const login = loginRef.current?.value || "No login provided";
    const password = pwRef.current?.value || "No password provided";

    alert(`Login: ${login}, Password: ${password}`);
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="login" ref={loginRef} />
      <input type="text" placeholder="login" ref={pwRef} />
      <button onClick={handleClick} ref={btnRef}>
        login
      </button>
    </React.Fragment>
  );
};
