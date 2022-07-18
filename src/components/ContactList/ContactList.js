import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';


import { deleteContactAction,addNewContact, getContactsAction, selectContact} from '../../store/actions/ContactAction';

function ContactList(){

	const dispatch = useDispatch()
	const { contacts } = useSelector((state) => state)


		useEffect(() => {
			dispatch(getContactsAction())
	  
		  }, [dispatch])
	

	

const onDelete = (contact) => {
	dispatch(deleteContactAction(contact));
};



	const addContact = () => {
		dispatch(addNewContact())
	}


const onEdit = (contact) => { 
		dispatch(selectContact(contact))
	}
  

		return (
			<div className='list-container'>
				<div className='item-container'>
					{contacts.map((contact) => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
								onDelete={onDelete}
               				 onEdit = {onEdit}
							/>
						);
					})}
				</div>
				<button id='new' onClick={addContact}>New</button>
			</div>
		);
	}

	

export default ContactList
