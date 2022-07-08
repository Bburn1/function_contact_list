import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import { connect } from 'react-redux';
import contactService from '../../contact-service';
import { getContact, deleteContact,addNewContact,selectContact } from '../../store/actions/ContactAction';

function ContactList({contacts,getContact, addNewContact,selectContact, deleteContact}){

	useEffect(() => {
		contactService.get('/')
		.then(({data}) => getContact(data))
    .catch(({statusText}) => console.log(statusText))
  }, [getContact])



		return (
			<div className='list-container'>
				<div className='item-container'>
					{contacts.map((contact) => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
								onDelete={deleteContact}
               				 onEdit={selectContact}
							/>
						);
					})}
				</div>
				<button id='new' onClick={addNewContact}>New</button>
			</div>
		);
	}

	const mapStateToProps = ({contacts}) => ({
		
			contacts,
		
	})
	
	const mapDispatchToProps = {
		getContact,
		addNewContact,
		selectContact,
		deleteContact,
		}


export default connect(mapStateToProps,mapDispatchToProps) (ContactList)
