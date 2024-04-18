const descriptionReducer = (state = false, action) => {
  switch (action.type) {
    case "openDescription":
      return true;
    case "closeDescription":
      return false;
    default:
      return state;
  }
};

export default descriptionReducer;
