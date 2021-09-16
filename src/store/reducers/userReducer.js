import actionTypes from "../actionTypes/userTypes";

const initialState = {
  user: null,
  error: null,
  loading: true,
  initialLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        initialLoading: false,
      };
    case actionTypes.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.FAILED:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.CLEAR:
      return {
        ...state,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
