const Initial_book = {
  currentBook: { name: "", price: "", category: "", description: "", url: "" },
};

const currentBookReducer = (state = Initial_book, action) => {
  switch (action.type) {
    case "setCurrentBook":
      return { currentBook: action.payload };
    case "resetCurrentBook":
      return {
        ...state,
        currentBook: { name: "", price: "", category: "", description: "", url: "" },
      };
    case "getCurrentBook":
      return state;
    default:
      return state;
  }
};

export default currentBookReducer;
