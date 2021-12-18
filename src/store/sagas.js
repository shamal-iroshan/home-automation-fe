import {all, fork} from "redux-saga/effects";
import homeSagas from "../app/views/Home/saga";

export default function* rootSaga() {
  yield all(homeSagas.map((s) => fork(s)));
}