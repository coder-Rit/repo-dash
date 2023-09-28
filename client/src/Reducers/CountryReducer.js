import { LOAD_REPORTS_SUCCESS } from "../Constants/reportConstants";
import { COUNTRY_MAP_MAKING_END, COUNTRY_MAP_MAKING_START, COUNTRY_SORT_END, COUNTRY_SORT_START } from "../Constants/sortConstant";

export const CountryReducer = (state = { CountryMap: [] }, action) => {
  switch (action.type) {
    case COUNTRY_MAP_MAKING_START:
      return {
        ...state,
        is_country_maping_done: false,
        CountryMap:action.payload,
      };
    case COUNTRY_MAP_MAKING_END:
      return {
        ...state,
        is_country_maping_done: true,
        CountryMap:action.payload,
      };

    default:
      return state;
  }
};


export const Country_sort_Reducer = (state = { SortedCountry: [] }, action) => {
  switch (action.type) {
    case COUNTRY_SORT_START:
      return {
        ...state,
        is_sorting_done: false,
        SortedCountry:action.payload,
      };
    case COUNTRY_SORT_END:
      return {
        ...state,
        is_sorting_done: true,
        SortedCountry:action.payload,
      };

    default:
      return state;
  }
};
