import { GET_APPLICANTIONS } from "./constants/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  onError: false,
  error: {},
  resp: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPLICANTIONS.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        onError: false,
        error: {}
      };
    }
    case GET_APPLICANTIONS.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: {},
        resp: action.payload.data
      };
    }
    case GET_APPLICANTIONS.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
        onError: true,
        error: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
