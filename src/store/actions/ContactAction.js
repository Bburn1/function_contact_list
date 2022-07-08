export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const addNewContact=(payload) =>{
    return {
        type: ADD_NEW_CONTACT ,
        payload
    }

}

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const deleteContact=(payload) =>{
    return {
        type: DELETE_CONTACT,
        payload
    }

}
export const CREATE_CONTACT = 'CREATE_CONTACT'
export const createContact=(payload) =>{
    return {
        type: CREATE_CONTACT,
        payload
    }

}



export const SELECT_CONTACT = 'SELECT_CONTACT'
export const selectContact=(payload) =>{
    return {
        type: SELECT_CONTACT,
        payload
    }

}

export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const updateContact=(payload) =>{
    return {
        type: UPDATE_CONTACT,
        payload
    }

}

export const GET_CONTACT = 'GET_CONTACT'
export const getContact=(payload) =>{
    return {
        type: GET_CONTACT,
        payload
    }

}


