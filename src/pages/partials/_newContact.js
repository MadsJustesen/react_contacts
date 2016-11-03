import React, { Component } from 'react';
import {Button, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Panel} from 'react-bootstrap';

export default class NewContact extends Component {
	render (){
		return(
			<Panel header={<h4>{"Ny Kontaktperson"}</h4>}>
			<Form onSubmit={this.props.saveContact}>
			<FormGroup >
			<Col componentClass={ControlLabel} sm={2}>
			Navn
			</Col>
			<Col sm={10}>
			<FormControl type="text" placeholder="Navn"/>
			</Col>
			<br/><br/>
			<Col componentClass={ControlLabel} sm={2}>
			Email
			</Col>
			<Col sm={10}>
			<FormControl type="email" placeholder="Email" ref="email"/>
			</Col>
			<br/><br/>
			</FormGroup>
			<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
			Kompetencer
			</Col>
			<Col sm={10}>
			<Checkbox inline value="JavaScript">JavaScript</Checkbox>
			<Checkbox inline value="Databaser">Databaser</Checkbox>
			<Checkbox inline value="C#">C#</Checkbox>
			<Checkbox inline value="Webservices">Webservices</Checkbox>
			<Checkbox inline value="Systemarkitektur">Systemarkitektur</Checkbox>
			</Col>
			</FormGroup>
			<Col sm={2}>
			<br/>
			<Button type="submit" bsStyle="success">
			Gem kontaktperson
			</Button>
			</Col>
			</Form>
			</Panel>
			);
	}
}