export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          inEditing: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (action.id !== todo.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case 'START_EDIT_TODO':
      return state.map((todo) => {
        if (action.id !== todo.id) {
          return todo;
        }
        return {
          ...todo,
          inEditing: true,
        };
      });
    case 'FINISH_EDIT_TODO':
      return state.map((todo) => {
        if (action.id !== todo.id) {
          return todo;
        }
        return {
          ...todo,
          inEditing: false,
          text: action.text,
        };
      });
    case 'DELETE_TODO':
      return state.filter(todo => action.id !== todo.id);
    default:
      return state;
  }
}
