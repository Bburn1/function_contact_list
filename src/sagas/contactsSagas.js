import { put } from 'redux-saga/effects'
import {
     createContactError,
     createContactRequest, 
     createContactSuccsess, 
     deleteContactError, 
     deleteContactRequest, 
     deleteContactSuccsess, 
     getContactsError, 
     getContactsRequest, 
     getContactsSuccsess, 
     updateContactError,
     updateContactRequest,
     updateContactSuccsess
    } 
    from '../store/actions/ContactAction'
import contactService from '../contact-service'

export function* getContactsSaga(){
    yield put(getContactsRequest())
        try {
            const contacts = yield contactService.get('/').then(({data})=>data)
            yield put(getContactsSuccsess(contacts))
        } catch (error) {
            yield put(getContactsError(error))
            
        }
}

export function* createContactSaga({payload}){
    yield put(createContactRequest())
    try {
        const newContact = yield contactService.post('/', payload)
        .then(({data})=>data)
        yield put(createContactSuccsess(newContact))
        
    } catch (error) {
        yield put(createContactError(error))
        
    }
}

export function* updateContactSaga({payload}){
    yield put(updateContactRequest())
    try {
        const updateContact = yield contactService.put(`/${payload.id}`, payload)
        .then(({data})=>data)
        yield put(updateContactSuccsess(updateContact))
        
    } catch (error) {
        yield put(updateContactError(error))
        
    }
}

export function* deleteContactSaga({payload}){
    yield put(deleteContactRequest())
    try {
        yield contactService.delete(`/${payload}`)
        yield put(deleteContactSuccsess(payload))
        
    } catch (error) {
        yield put(deleteContactError(error))
        
    }
}
