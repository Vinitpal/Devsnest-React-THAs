const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "ITEM_DONE":
      let completeState = [...state];
      completeState[action.payload].done = true;
      return completeState;

    case "REMOVE_ITEM":
      console.log(state);
      return state.filter((item, index) => index !== action.payload);

    case "UPDATE_ITEM":
      // console.log(action.payload);
      let newState = [...state];

      newState[action.payload.index].title = action.payload.nTitle;
      newState[action.payload.index].editing = false;

      return newState;

    case "CLEAR_LIST":
      return [];

    case "LOAD_TODO":
      return action.payload.slice(0, 5);

    default:
      return state;
  }
};

export default todoReducer;
