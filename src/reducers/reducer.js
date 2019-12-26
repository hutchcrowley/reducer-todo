export const initialState = []

// Reducer function: interacts with state and changes the data.
export const reducer = (state, action) => {
  // Switch statement to set state change conditions
  switch (action.type) {
    //   Action object for adding a todo item
    case 'ADD':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]

    //   Action object for clearing completed todo items
    case 'CLEAR':
      return state.filter(todo => !todo.completed)

    //   Action object for toggling completed todo items
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo)

    //   Action object for clearing all todo items regardless of completion
    case 'CLEAR_ALL':
      return initialState
    default:
      return state
  }
}
