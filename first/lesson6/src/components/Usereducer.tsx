import React, { useReducer } from "react";

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "kiwi" },
  { id: 4, name: "banana" },
  { id: 5, name: "cherry" },
];

const Usereducer: React.FC = () => {
  type Actions =
    | { type: "add"; value: string }
    | { type: "remove"; id: number };

  type Todos = {
    id: number;
    name: string;
  };

  type State = Todos[];

  const [state, dispatch] = useReducer((state: State, action: Actions) => {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length + 1, name: action.value }];
      case "remove":
        return state.filter((e) => e.id !== action.id);
    }
  }, fruits);
  return (
    <div>
      <h1>Use Reducer</h1>
      <button onClick={() => dispatch({ type: "add", value: "banana" })}>
        banana
      </button>
      <button onClick={() => dispatch({ type: "remove", id: 1 })}>
        remove first
      </button>
      {state.map(({ id, name }) => (
        <h1 key={id}>
          {id} - {name}
        </h1>
      ))}
    </div>
  );
};

export default Usereducer;
