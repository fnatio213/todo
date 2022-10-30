let initialState = {
    todos: [
     
    ],
  };
  
  let Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_NEW_TODO":
        return {
          ...state,
          users: action.payload,
        };
      case "DELETE_TODO":
        const filteredtodos = state.todos.filter(
          (todo) => todo.id !== action.payload
        );
        return {
          ...state,
          todos: filteredtodos,
        };
      case "EDIT":
        const Edit = state.todos.map((todo) =>
          todo.id === action.payload.data.id ? action.payload.data : todo
        );
        return {
          ...state,
          todos: Edit,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;