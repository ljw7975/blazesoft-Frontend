export const openPopup = (state) => {
  return (dispatch) => {
    dispatch({
      type: "open",
      payload: state,
    });
  };
};

export const closePopup = (state) => {
  return (dispatch) => {
    dispatch({
      type: "close",
      payload: state,
    });
  };
};

export const openDescription = (state) => {
  return (dispatch) => {
    dispatch({
      type: "openDescription",
      payload: state,
    });
  };
};

export const closeDescription = (state) => {
  return (dispatch) => {
    dispatch({
      type: "closeDescription",
      payload: state,
    });
  };
};

export const getBookList = (state) => {
  return (dispatch) => {
    dispatch({
      type: "list",
      payload: state,
    });
  };
};

export const addNewBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: state,
    });
  };
};

export const deleteBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "delete",
      payload: state,
    });
  };
};

export const modifyBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "modify",
      payload: state,
    });
  };
};

export const setCurrentBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "setCurrentBook",
      payload: state,
    });
  };
};

export const resetCurrentBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "resetCurrentBook",
      payload: state,
    });
  };
};

export const getCurrentBook = (state) => {
  return (dispatch) => {
    dispatch({
      type: "getCurrentBook",
      payload: state,
    });
  };
};
