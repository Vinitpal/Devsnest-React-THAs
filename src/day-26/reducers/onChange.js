const initialState = {
  userName: "",
  email: "",
};

const onChange = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        userName: action.payload,
      };

    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export default onChange;
