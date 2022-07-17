import ACTION_TYPES from "./actionTypes"

export const SELECT_CONTACT = 'SELECT_CONTACT'
export const selectContact=(payload) =>{
    return {
        type: SELECT_CONTACT,
        payload
    }

}


export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const addNewContact=(payload) =>{
    return {
        type: ADD_NEW_CONTACT ,
        payload
    }

}

///

// GETTING

export const getContactsAction = () => { 
    return {
        type: ACTION_TYPES.GET_CONTACTS_ACTION 
    }
 }
 export const getContactsRequest = () => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_REQUEST 
    }
  }
  export const getContactsSuccsess = (payload) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_SUCCSESS,
        payload
    }
  }

  export const getContactsError = (payload) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_ERROR,
        payload
    }
  }

  // CREATING

export const createContactAction = (payload) => { 
    return {
        type: ACTION_TYPES.POST_CONTACT_ACTION,
        payload
    }
 }
 export const createContactRequest = () => {
    return {
        type: ACTION_TYPES.POST_CONTACT_REQUEST
  }}

  export const createContactSuccsess = (payload) => {
    return {
        type: ACTION_TYPES.POST_CONTACT_SUCCSESS,
        payload
    }
  }

  export const createContactError = (payload) => {
    return {
        type: ACTION_TYPES.POST_CONTACT_ERROR,
        payload
    }
  }

//UPDATING 

export const updateContactAction = (payload) => { 
    return {
        type: ACTION_TYPES.PUT_CONTACT_ACTION,
        payload
    }
 }
 export const updateContactRequest = () => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_REQUEST
  }}

  export const updateContactSuccsess = (payload) => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_SUCCSESS,
        payload
    }
  }

  export const updateContactError = (payload) => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_ERROR,
        payload
    }
  }
  
  //DELETING

  export const deleteContactAction = (payload) => { 
    return {
        type: ACTION_TYPES.DELETE_CONTACT_ACTION,
        payload
    }
 }
 export const deleteContactRequest = () => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_REQUEST
  }}

  export const deleteContactSuccsess = (payload) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_SUCCSESS,
        payload
    }
  }

  export const deleteContactError = (payload) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_ERROR,
        payload
    }
  }
