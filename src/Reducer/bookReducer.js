const Initial_books = { bookList: [] };

const bookReducer = (state = Initial_books, action) => {
  switch (action.type) {
    case "add":
      return { ...state, bookList: [action.payload, ...state.bookList] };
    case "delete":
      return {
        ...state,
        bookList: [
          ...state.bookList.filter((book) => book.name !== action.payload.name),
        ],
      };
    case "modify":
      let bookIndex = state.bookList.findIndex(
        (book) => book.name === action.payload.name
      );
      return {
        ...state,
        bookList: state.bookList.map((book, i) =>
          i === bookIndex
            ? {
                ...book,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                category: action.payload.category,
                url: action.payload.url
              }
            : book
        ),
      };
    default:
      return state;
  }
};

export default bookReducer;
