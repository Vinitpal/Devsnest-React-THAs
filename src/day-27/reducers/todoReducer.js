const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item, index) => index !== action.payload);

    case "UPDATE_ITEM":
      return state.filter((item, index) => index !== action.payload);

    case "CLEAR_LIST":
      return [];

    case "LOAD_TODO":
      return action.payload.slice(0, 5);

    default:
      return state;
  }
};

export default todoReducer;
