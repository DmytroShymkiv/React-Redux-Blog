import actionTypes from "../actionTypes/postTypes";

const initialState = {
  posts: [],
  post: null,
  postLoading: true,
  postError: null,
  error: null,
  loading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case actionTypes.SET_POST:
      return {
        ...state,
        postLoading: false,
        post: action.payload,
        postError: null,
      };
    case actionTypes.SET_LOADING:
      return { ...state, loading: true };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.SET_POST_LOADING:
      return { ...state, postLoading: true };
    case actionTypes.SET_POST_ERROR:
      return { ...state, postError: action.payload, postLoading: false };
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
      };
    default:
      return state;
  }
};

export default postReducer;
