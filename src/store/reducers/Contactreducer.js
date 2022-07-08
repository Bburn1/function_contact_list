import { ADD_NEW_CONTACT,
     DELETE_CONTACT,
      SELECT_CONTACT,
      UPDATE_CONTACT,
      GET_CONTACT,
      CREATE_CONTACT,
       } from "../actions/ContactAction"
const initialState = {
    contacts:[],
    selectedContact: createEmptyContact()
}


export default function toContactReucer(state = initialState,{type, payload}) {

    switch(type){

        case GET_CONTACT: return {...state, contacts: payload, selectedContact:createEmptyContact()}
        case ADD_NEW_CONTACT: return {...state, selectedContact:createEmptyContact()}
        case DELETE_CONTACT: return {...state, contacts: state.contacts
            .filter((contact)=> contact.id !==payload), selectedContact:createEmptyContact()}
        case UPDATE_CONTACT: return {...state, contacts: state.contacts
            .map((contact)=> contact.id !== payload.id ? contact : payload),
            selectedContact:createEmptyContact()}
        case CREATE_CONTACT: return{...state, contacts: [...state.contacts, payload]}
        case SELECT_CONTACT: return{...state, selectedContact:payload}
        default:return state
         
    }   
}

function createEmptyContact() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    };
}