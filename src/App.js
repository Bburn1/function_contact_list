import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { connect } from 'react-redux';

function App(selectedContact) {
	
		return (
			<div className='container'>
				<h1 className='header-app'>Contact List</h1>
				<div className='main'>
					<ContactList
						
					/>
					<ContactForm
						key={selectedContact.id}
						contactForEdit={selectedContact}
						
					/>
				</div>
			</div>
		);
	}
const mapStateToProps = ({selectedContact}) => ({
	selectedContact
})



export default connect(mapStateToProps) (App);





