import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../store/actions/actionTypes";
import { createContactSaga, deleteContactSaga, getContactsSaga, updateContactSaga } from "./contactsSagas";

export default function* rootSaga(){
    yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga)
    yield takeLatest(ACTION_TYPES.POST_CONTACT_ACTION, createContactSaga)
    yield takeLatest(ACTION_TYPES.PUT_CONTACT_ACTION, updateContactSaga)
    yield takeLatest(ACTION_TYPES.DELETE_CONTACT_ACTION, deleteContactSaga)

}

