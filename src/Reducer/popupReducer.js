const popupReducer = (state = false, action) => {
  switch (action.type) {
    case "open":
      return true;
    case "close":
      return false;
    default:
      return state;
  }
};

export default popupReducer;
