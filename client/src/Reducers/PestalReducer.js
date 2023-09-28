import { LOAD_REPORTS_SUCCESS } from "../Constants/reportConstants";
import { PESTAL_MAP_MAKING_END, PESTAL_MAP_MAKING_START, PESTAL_SORT_END, PESTAL_SORT_START } from "../Constants/sortConstant";

export const PestalReducer = (state = { PestalMap: [] }, action) => {
  switch (action.type) {
    case PESTAL_MAP_MAKING_START:
      return {
        ...state,
        is_pastal_maping_done: false,
        PestalMap:action.payload,
      };
    case PESTAL_MAP_MAKING_END:
      return {
        ...state,
        is_pastal_maping_done: true,
        PestalMap:action.payload,
      };

    default:
      return state;
  }
};


export const Pestal_sort_Reducer = (state = { SortedPestal: [] }, action) => {
  switch (action.type) {
    case PESTAL_SORT_START:
      return {
        ...state,
        is_sorting_done: false,
        SortedPestal:action.payload,
      };
    case PESTAL_SORT_END:
      return {
        ...state,
        is_sorting_done: true,
        SortedPestal:action.payload,
      };

    default:
      return state;
  }
};
