import post from "./post";
import user from "./user";
import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
