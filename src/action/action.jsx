export const AddNewtodo = (newTodo) => {
    return {
      type: "ADD_NEW_TODO",
      payload: newTodo,
    };
  };
  
  export const DeleteTodo = (id) => {
    return {
      type: "DELETE_TODO",
      payload: id,
    };
  };
  
  export const Edit = (data) => {
    return {
      type: "EDIT",
      payload: { data },
    };
  };