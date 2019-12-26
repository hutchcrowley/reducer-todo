export const initialState = [];

// Reducer function: interacts with state and changes the data. 
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return (
        [...state,
          {
          item: action.payload,
          completed: false,
          id: Date.now(),
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
      case 'CLEAR_ALL':
        return initialState
    default:
      return state;
  }
};
