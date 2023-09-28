import {
  LOAD_REPORTS_SUCCESS,
  LOAD_REPORTS_REQUEST,
  LOAD_REPORTS_FAIL,
  CLEAR_ERROR,
  
} from "../Constants/reportConstants";

export const reportReducer = (state = { reports: [], error: null }, action) => {
  switch (action.type) {
    case LOAD_REPORTS_REQUEST:
      return {
        loading: true,
        is_report_loaded: false,
      };
    case LOAD_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        is_report_loaded: true,
        reports:action.payload,
      };
    case LOAD_REPORTS_FAIL:
      return {
        ...state,
        loading: false,
        is_report_loaded: false,
        error: action.payload,
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
