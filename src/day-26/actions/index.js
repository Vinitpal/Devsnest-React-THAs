export const changeUsername = (input) => {
  return {
    type: "CHANGE_USERNAME",
    payload: input,
  };
};

export const changeEmail = (input) => {
  return {
    type: "CHANGE_EMAIL",
    payload: input,
  };
};
