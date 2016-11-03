import React, { Component } from 'react';
import ContactList from './partials/_contactList';
import NewContact from './partials/_newContact';

import {Grid, Row, Button, Col, Form, FormGroup, InputGroup, FormControl, Radio} from 'react-bootstrap';

export default class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: localStorage.getItem('contacts'),
			selected_skill: "Alle",
			search_input: "",
			show_new_contact_panel: false
		}
	}

	render() {
		var contacts = this.state.contacts;
		const context = this;

		const search = function(e) {
			context.setState({search_input: e.target.value});
		}

		const selectSkill = function(e) {
			context.setState({selected_skill: e.target.value});
		}

		const filter_contacts = function() {
			var all_contacts = JSON.parse(localStorage.getItem('contacts'));

			// Start by filtering by selected skills
			var by_skill = [];
			if(context.state.selected_skill !== "Alle") {
				for (var contact in all_contacts) {
					if(all_contacts[contact].skills.indexOf(context.state.selected_skill) !== -1) {
						by_skill.push(all_contacts[contact]);
					}
				}
			} else {
				by_skill = all_contacts;
			}

			// Then filter by name
			var result_set = [];
			if(!context.state.search_input.trim()) {
				result_set = result_set.concat(by_skill);
			} else {
				for (var contact in by_skill) {
					if(by_skill[contact].name.toLowerCase().indexOf(context.state.search_input.toLowerCase()) > -1) {
						result_set.push(by_skill[contact]);
					}
				}
			}

			contacts = JSON.stringify(result_set);
			return contacts;
		}

		const newContact = function(e) {
			context.setState({show_new_contact_panel: true});
		}

		const saveContact = function(e) {
			e.preventDefault();
			context.setState({show_new_contact_panel: false});
			var contacts = JSON.parse(localStorage.getItem('contacts'));

			var name = e.target.elements[0].value;
			var email = e.target.elements[1].value;
			var skills = [];

			for(var i = 2; i < e.target.elements.length; i++) {
				if(e.target.elements[i].checked) {
					skills.push(e.target.elements[i].value);
				}
			}
			console.log(e.target.elements[2].value);

			var contact = {name: name, email: email, skills: skills};
			contacts.push(contact);
			localStorage.setItem('contacts', JSON.stringify(contacts));
			context.setState({contacts: contacts});
		}

		const newContactPanel = function() {
			if(context.state.show_new_contact_panel) {
				return (
					<NewContact saveContact={saveContact}/>
				);
			} else {
				return null;
			}
		}

		return (
			<Grid>
			<Row>
			<Col md={12}>
				<Form>
				<FormGroup>
				<br/>
      				<InputGroup>
        				<InputGroup.Addon>Søg</InputGroup.Addon>
        				<FormControl type="text" onChange={search}/>
        				<InputGroup.Button>
          					<Button bsStyle="success" onClick={newContact}>Opret ny</Button>
        				</InputGroup.Button>
      				</InputGroup>
    			</FormGroup>
    			<FormGroup>
    				<Radio inline value="Alle" onChange={selectSkill} checked={this.state.selected_skill === "Alle"}>Alle</Radio>
      				<Radio inline value="JavaScript" onChange={selectSkill} checked={this.state.selected_skill === "JavaScript"}>JavaScript</Radio>
      				<Radio inline value="Databaser" onChange={selectSkill} checked={this.state.selected_skill === "Databaser"}>Databaser</Radio>
      				<Radio inline value="C#" onChange={selectSkill} checked={this.state.selected_skill === "C#"}>C#</Radio>
      				<Radio inline value="Webservices" onChange={selectSkill} checked={this.state.selected_skill === "Webservices"}>Webservices</Radio>
      				<Radio inline value="Systemarkitektur" onChange={selectSkill} checked={this.state.selected_skill === "Systemarkitektur"}>Systemarkitektur</Radio>
    			</FormGroup>
    			</Form>

    			{newContactPanel()}

				<ContactList contacts={filter_contacts()} skill={this.state.selected_skill} num_of_contacts={JSON.parse(localStorage.getItem('contacts')).length}/>
			</Col>
			</Row>
			</Grid>
		);
	}
}