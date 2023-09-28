import { combineReducers,legacy_createStore  as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { reportReducer } from "./Reducers/reportReducer";
import { RegionReducer, Region_sort_Reducer } from "./Reducers/RegionReducer";
import {
  CountryReducer,
  Country_sort_Reducer,
} from "./Reducers/CountryReducer";
import { PestalReducer, Pestal_sort_Reducer } from "./Reducers/PestalReducer";
import { TopicReducer } from "./Reducers/TopicReducer";

const combinReucer = combineReducers({
  reports: reportReducer,

  regionalMap: RegionReducer,
  sortedRegion: Region_sort_Reducer,

  countryMap: CountryReducer,
  sortedCountry: Country_sort_Reducer,

  pestalMap: PestalReducer,
  sortedPestal: Pestal_sort_Reducer,

  topicMap: TopicReducer,
});
let intialState = {};
let middelware = [thunk];
const Store = createStore(
  combinReucer,
  intialState,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default Store;
