import { put } from 'redux-saga/effects'
import {
     createContactError,
     createContactRequest, 
     createContactSuccsess, 
     getContactsError, 
     getContactsRequest, 
     getContactsSuccsess 
    } 
    from '../store/actions/ContactAction'
import contactService from '../contact-service'

export function* getContactsSaga(){
    yield put(getContactsRequest)
        try {
            const contacts = yield contactService.get('/').then(({data})=>data)
            yield put(getContactsSuccsess(contacts))
        } catch (error) {
            yield put(getContactsError(error))
            
        }
}

export function* createContactSaga({payload}){
    yield put(createContactRequest)
    try {
        const newContact = yield contactService.post('/', payload)
        .then(({data})=>data)
        yield put(createContactSuccsess(newContact))
        
    } catch (error) {
        yield put(createContactError(error))
        
    }
}

