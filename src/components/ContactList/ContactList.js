import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import contactService from '../../contact-service';
import { deleteContactAction,addNewContact,selectContact, getContactsAction} from '../../store/actions/ContactAction';

function ContactList(){

	const dispatch = useDispatch()
	const { contacts } = useSelector((state) => state)


	useEffect(() => {
	  dispatch(getContactsAction())
	
	  
	}, [dispatch])
	


// 	useEffect(() => {
// 		contactService.get('/')
// 		.then(({data}) => {dispatch(getContactsAction(data))
// 		})
		
//     .catch(({statusText}) => console.log(statusText))
//   }, [dispatch])

  	const addContact = () => {
		dispatch(addNewContact())
	}

		return (
			<div className='list-container'>
				<div className='item-container'>
					{contacts.map((contact) => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
								onDelete={deleteContactAction}
               				 onEdit={selectContact}
							/>
						);
					})}
				</div>
				<button id='new' onClick={addContact}>New</button>
			</div>
		);
	}

	// const mapStateToProps = ({contacts}) => ({
		
	// 		contacts,
		
	// })
	
	// const mapDispatchToProps = {
	// 	getContact,
	// 	addNewContact,
	// 	selectContact,
	// 	deleteContact,
	// 	}


// export default connect(mapStateToProps,mapDispatchToProps) (ContactList)

export default ContactList
