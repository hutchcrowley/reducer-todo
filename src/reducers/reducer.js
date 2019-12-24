export const todos = [
  {
    task: "",
    id: "",
    completed: false
  }
];

// Reducer function.
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return (
        [...state,
          {
          item: action.payload,
          completed: false,
          id: Date.now()
          }
        ]
      );

    case "CLEAR":
      return state.filter(todo => !todo.completed);
    case "toggle":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
