import {call, put, takeLatest} from "redux-saga/effects";
import * as actionTypes from "./constants";
import axios from "../../../axios/axios";
import {saveConfig, saveData} from "./actions";

const getDataAsync = async () => {
  return axios.get("/get-status").then(res => res.data);
}
const getConfigAsync = async () => {
  return axios.get("/get-config").then(res => res.data);
}
const updateStateAsync = async (data) => {
  const values = {
    deviceId: data.deviceId,
    state: data.state,
    name: data.name,
    day: data.day,
    on: data.on ? data.on : undefined,
    off: data.off ? data.off : undefined,
  }
  return axios
    .patch(`/update-state`, null, {params: values})
    .then(res => res.data);
}
const updateDeviceAsync = async (data) => {
  return axios.patch(`/edit-device?deviceId=${data.deviceId}&deviceName=${data.name}`).then(res => res);
}
const deleteDeviceAsync = async (data) => {
  return axios.delete(`/delete-device?deviceId=${data}`).then(res => res);
}
const addDeviceAsync = async (data) => {
  return axios.post(`/add-device?deviceName=${data}`).then(res => res);
}

function* handleGetData() {
  try {
    const configData = yield call(getConfigAsync);
    const deviceData = yield call(getDataAsync);
    yield put(saveData(deviceData));
    if (configData.length > 0) {
      yield put(saveConfig(configData[0]));
    }
  } catch (e) {
    console.error(e)
  }
}

function* handleUpdateState(data) {
  try {
    const details = data.payload;
    yield call(updateStateAsync, details)
  } catch (e) {
    console.error(e)
  }
}

function* handleDeviceUpdate(data) {
  try {
    const details = data.payload;
    const response = yield call(updateDeviceAsync, details);
    if (response.status === 200) {
      const response = yield call(getDataAsync);
      yield put(saveData(response));
    }
  } catch (e) {
    console.error(e)
  }
}

function* handleDeviceDelete(data) {
  try {
    const details = data.payload;
    const response = yield call(deleteDeviceAsync, details);
    if (response.status === 200) {
      const response = yield call(getDataAsync);
      yield put(saveData(response));
    }
  } catch (e) {
    console.error(e)
  }
}

function* handleDeviceAdd(data) {
  try {
    const details = data.payload;
    const response = yield call(addDeviceAsync, details);
    if (response.status === 201) {
      const response = yield call(getDataAsync);
      yield put(saveData(response));
    }
  } catch (e) {
    console.error(e)
  }
}

function* watchHomeSagas() {
  yield takeLatest(actionTypes.GET_DATA, handleGetData);
  yield takeLatest(actionTypes.UPDATE_SATE, handleUpdateState);
  yield takeLatest(actionTypes.UPDATE_DEVICE, handleDeviceUpdate);
  yield takeLatest(actionTypes.DELETE_DEVICE, handleDeviceDelete);
  yield takeLatest(actionTypes.ADD_DEVICE, handleDeviceAdd);
}

const homeSagas = [watchHomeSagas];

export default homeSagas;