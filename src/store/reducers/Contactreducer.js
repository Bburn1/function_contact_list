import { ADD_NEW_CONTACT,
      SELECT_CONTACT,
     } from "../actions/ContactAction"

     import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
    contacts:[],
    isFetching:false,
    error:null,
    selectedContact: createEmptyContact()
}


export default function toContactReducer(state = initialState,{type, payload}) {

    switch(type){

        case ADD_NEW_CONTACT: return {...state, selectedContact:createEmptyContact(),}
        case SELECT_CONTACT: return{...state, selectedContact:payload}
        
        case ACTION_TYPES.DELETE_CONTACT_SUCCSESS: return {...state, contacts: state.contacts
            .filter((contact)=> contact.id !==payload), isFetching:false
            , selectedContact:createEmptyContact()
        }
        case ACTION_TYPES.DELETE_CONTACT_REQUEST: return {...state, isFetching:true}
        case ACTION_TYPES.DELETE_CONTACT_ERROR: return {...state, error:payload, isFetching:true}
        
        case ACTION_TYPES.POST_CONTACT_SUCCSESS: return {...state, contacts: [...state.contacts,payload], isFetching:true}
        case ACTION_TYPES.POST_CONTACT_REQUEST:return {...state, isFetching:true}
        case ACTION_TYPES.POST_CONTACT_ERROR:return {...state, error:payload, isFetching:true}
        
        case ACTION_TYPES.PUT_CONTACT_SUCCSESS: return{...state, contacts: state.contacts
            .map((contact)=> contact.id !== payload.id ? contact : payload),
            selectedContact:createEmptyContact(), isFetching:false }
        case ACTION_TYPES.PUT_CONTACT_REQUEST:return{...state, isFetching:true}
        case ACTION_TYPES.PUT_CONTACT_ERROR:return{...state, error:payload, isFetching:true}

        case ACTION_TYPES.GET_CONTACTS_SUCCSESS: return {...state, contacts: payload, selectedContact:createEmptyContact(), isFetching:false}
        case ACTION_TYPES.GET_CONTACTS_REQUEST:return{...state, isFetching:true}
        case ACTION_TYPES.GET_CONTACTS_ERROR:return{...state, error:payload, isFetching:true}  

        
       
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