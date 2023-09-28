import { LOAD_REPORTS_SUCCESS } from "../Constants/reportConstants";
import { REGIONAL_MAP_MAKING_END, REGIONAL_MAP_MAKING_START, REGIONAL_SORT_END, REGIONAL_SORT_START } from "../Constants/sortConstant";

export const RegionReducer = (state = { RegionMap: [] }, action) => {
  switch (action.type) {
    case REGIONAL_MAP_MAKING_START:
      return {
        ...state,
        is_regional_maping_done: false,
        RegionMap:action.payload,
      };
    case REGIONAL_MAP_MAKING_END:
      return {
        ...state,
        is_regional_maping_done: true,
        RegionMap:action.payload,
      };

    default:
      return state;
  }
};


export const Region_sort_Reducer = (state = { SortedRegion: [] }, action) => {
  switch (action.type) {
    case REGIONAL_SORT_START:
      return {
        ...state,
        is_sorting_done: false,
        SortedRegion:action.payload,
      };
    case REGIONAL_SORT_END:
      return {
        ...state,
        is_sorting_done: true,
        SortedRegion:action.payload,
      };

    default:
      return state;
  }
};
