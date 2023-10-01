import React, { useReducer } from "react";

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "kiwi" },
];

const Reducer: React.FC = () => {
  type Actions =
    | { type: "add"; value: string }
    | { type: "remove"; id: number };

  type Todos = { id: number; name: string };

  type State = Todos[];

  const [state, dispatch] = useReducer((state: State, action: Actions) => {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length + 1, name: action.value }];
      case "remove":
        return state.filter((v) => v.id !== action.id);
      default:
        return state;
    }
  }, fruits);

  return (
    <React.Fragment>
      <h1>Reducer</h1>
      {state.map((v) => (
        <h1 key={v.id}>
          {v.id} - {v.name}
        </h1>
      ))}
      <button onClick={() => dispatch({ type: "add", value: "banana" })}>
        banana
      </button>
      <button onClick={() => dispatch({ type: "remove", id: 1 })}>
        remove 1
      </button>
    </React.Fragment>
  );
};

export default Reducer;
