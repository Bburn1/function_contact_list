import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createContactAction,updateContactAction, deleteContactAction } from '../../store/actions/ContactAction';
import './ContactForm.css';

function ContactForm({contactForEdit}){

	
	const dispatch = useDispatch()

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
			
	    dispatch(createContactAction(editContact))
		}
		else {
	
			dispatch(updateContactAction(editContact))
		}
		setEditContact(createEmptyContact());
	};


	const onContactDelete = () => {
		
	dispatch(deleteContactAction(editContact))
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
	export default  ContactForm

