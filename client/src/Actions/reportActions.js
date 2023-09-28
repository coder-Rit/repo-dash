import axios from "axios";
import {
  LOAD_REPORTS_REQUEST,
  LOAD_REPORTS_SUCCESS,
  LOAD_REPORTS_FAIL,
} from "../Constants/reportConstants";

export const getAllreports = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REPORTS_REQUEST });

    const { data } = await axios.get(
      "http://localhost:4000/api/v1/getReports/all"
    );

    dispatch({ type: LOAD_REPORTS_SUCCESS, payload: data.reports });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_REPORTS_FAIL, payload: error });
  }
};

export const getSpecificReports = (queryData) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REPORTS_REQUEST });

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/filterReports",queryData
    );

    dispatch({ type: LOAD_REPORTS_SUCCESS, payload: data.reports });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_REPORTS_FAIL, payload: error });
  }
};


