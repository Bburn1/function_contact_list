import React, {useState } from 'react';
import { connect } from 'react-redux';
import contactService from '../../contact-service';
import {createContactAction,updateContactAction, deleteContactAction } from '../../store/actions/ContactAction';
import './ContactForm.css';

function ContactForm({contactForEdit, onDelete,createContactAction,updateContactAction}){

	
	const [editContact, setEditContact] = useState(contactForEdit)

	function createEmptyContact() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		};
	}

	const onInputChange = (e) => {
		setEditContact({...editContact, [e.target.name]: e.target.value})
	};

  const onClearField = (e) => {
    const sibling = e.target.parentNode.firstChild;
		setEditContact({...editContact, [sibling.name]: ''});
  }

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (!editContact.id){
			const newContact = {...editContact, id:Date.now()}
			contactService.post('/',newContact)
			.then(({data}) => {createContactAction(data)})
			.catch(err =>console.log(err))
		}
		else {
			contactService.put(`/${editContact.id}`, editContact)
			.then(({data}) => {updateContactAction(data)})
			.catch(err =>console.log(err))

		}
		setEditContact(createEmptyContact());
	};


	const onContactDelete = () => {
    contactService.delete(`/${(editContact.id)}`)
    .then(({statusText})=> console.log(statusText))
    .catch(err => console.log(err))  
	onDelete((editContact.id))
	}
	// console.log(editContact);
		return (
			<form id='contact-form' onSubmit={onFormSubmit}>
				<div className='form-container'>
					<div className='contact-info'>
						<input
							type='text'
							className='text-field'
							placeholder='First name'
							name='firstName'
							value={editContact.firstName}
							onChange={onInputChange}
						/>
						<span className='clear' onClick={onClearField}>X</span>
					</div>
					<div className='contact-info'>
						<input
							type='text'
							className='text-field'
							name='lastName'
							placeholder='Last name'
							value={editContact.lastName}
							onChange={onInputChange}
						/>
						<span className='clear' onClick={onClearField}>X</span>
					</div>
					<div className='contact-info'>
						<input
							type='text'
							className='text-field'
							name='email'
							placeholder='Email'
							value={editContact.email}
							onChange={onInputChange}
						/>
						<span className='clear' onClick={onClearField}>X</span>
					</div>
					<div className='contact-info'>
						<input
							type='text'
							className='text-field'
							name='phone'
							placeholder='Phone'
							value={editContact.phone}
							onChange={onInputChange}
						/>
						<span className='clear' onClick={onClearField}>X</span>
					</div>
				</div>
				<div className='btns'>
					<button id='save' type='submit'>
						Save
					</button>
					{editContact.id ? (
						<button
							id='delete'
							type='button'
							onClick={onContactDelete}>
							Delete
						</button>
					) : (
						''
					)}
				</div>
			</form>
		);
	}

 
 const mapDispatchToProps = {
	onDelete: deleteContactAction,
	createContactAction,
	updateContactAction,
 };

export default connect(null,mapDispatchToProps) (ContactForm)
