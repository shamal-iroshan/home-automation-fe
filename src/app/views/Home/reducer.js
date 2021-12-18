import * as actionTypes from "./constants";

const initialState = {
  config: null,
  devicesData: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DATA:
      return {
        ...state,
        devicesData: action.payload
      }
    case actionTypes.SAVE_CONFIG:
      return {
        ...state,
        config: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;