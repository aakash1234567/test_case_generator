export const changeDataReducer = (e, id) => {
  return {
    type: "UPDATE",
    payload: {
      e,
      id,
    },
  };
};
