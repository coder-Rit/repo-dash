import {
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  CLEAR_ERROR,
  SET_SELECTED_USER_INDEX,
  LOAD_more_USER_REQUEST,
  LOAD_more_USER_SUCCESS,
  LOAD_more_USER_FAIL,
} from "../Constants/userConstants";

export const userReducer = (state = { users: [], error: null }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        newLoading: false,
        is_user_list_ready: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        newLoading: false,
        is_user_list_ready: true,
        users: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        newLoading: false,
        is_user_list_ready: false,
        error: action.payload,
      };




    case LOAD_more_USER_REQUEST:
      return {
        newLoading: true,
        loading: false,
        is_user_list_ready: true,
        users: action.payload,
      };
    case LOAD_more_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        newLoading: false,
        is_user_list_ready: true,
        users: action.newpayload,
      };
    case LOAD_more_USER_FAIL:
      return {
        ...state,
        loading: false,
        newLoading: false,
        is_user_list_ready: true,
        error: action.newpayload,
      };

    case SET_SELECTED_USER_INDEX:
      return {
        ...state,
        selectedIndex: action.userIndex,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
