import React, { Component } from 'react';
import Contact from './_contact';

export default class ContactList extends Component {
	render() {
		const context = this;
		var status = function() {
			if(context.props.skill === "Alle") {
				return "Viser " + JSON.parse(context.props.contacts).length + " kontakter" + ". Totalt antal personer i databasen: " + context.props.num_of_contacts;
			} else {
				return "Viser " + JSON.parse(context.props.contacts).length + " kontakter med kompetencen " + context.props.skill + ". Totalt antal personer i databasen: " + context.props.num_of_contacts;
			}
		}
		return(
			<div>
				<h4>{status()}</h4>
				{
				JSON.parse(this.props.contacts).map(function(contact) {
            		return <Contact name={contact.name} email={contact.email} skills={contact.skills}/>
          		})
				}
			</div>
		);
	}
}