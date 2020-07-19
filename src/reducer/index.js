const initialState = {
  article: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return {
        ...state,
        loading: true
      };
    case "SET_ARTICLE":
      return {
        ...state,
        article: action.payload,
        loading: false
      };
    case "DEL_ARTICLE":
      console.log(state.article.filter(e => e.id !== action.payload));
      return {
        ...state,
        article: state.article.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
