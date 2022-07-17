import { takeEvery, takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../store/actions/actionTypes";
import { createContactSaga, getContactsSaga } from "./contactsSagas";

export default function* rootSaga(){
    yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga)
    yield takeLatest(ACTION_TYPES.POST_CONTACT_ACTION, createContactSaga)

}

