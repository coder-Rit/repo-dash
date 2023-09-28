import { TOPIC_MAP_MAKING_END, TOPIC_MAP_MAKING_START } from "../Constants/sortConstant";

export const TopicReducer = (state = { TopicMap: [] }, action) => {
    switch (action.type) {
      case TOPIC_MAP_MAKING_START:
        return {
          ...state,
          is_topic_maping_done: false,
          TopicMap:action.payload,
        };
      case TOPIC_MAP_MAKING_END:
        return {
          ...state,
          is_topic_maping_done: true,
          TopicMap:action.payload,
        };
  
      default:
        return state;
    }
  };