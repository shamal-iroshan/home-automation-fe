import * as actionTypes from "./constants";

export const getData = () => {
  return {
    type: actionTypes.GET_DATA,
  }
};
export const saveData = (data) => {
  return {
    type: actionTypes.SAVE_DATA,
    payload: data,
  }
};
export const saveConfig = (data) => {
  return {
    type: actionTypes.SAVE_CONFIG,
    payload: data,
  }
};
export const updateState = (data) => {
  return {
    type: actionTypes.UPDATE_SATE,
    payload: data
  }
}
export const updateDevice = (data) => {
  return {
    type: actionTypes.UPDATE_DEVICE,
    payload: data
  }
}
export const deleteDevice = (data) => {
  return {
    type: actionTypes.DELETE_DEVICE,
    payload: data
  }
}
export const addDevice = (data) => {
  return {
    type: actionTypes.ADD_DEVICE,
    payload: data
  }
}