import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Contact extends Component {
	render() {
		return(
			<div>
				<Panel header={<h4>{this.props.name}</h4>}>
					<b>Mail:</b> {this.props.email}
					<br/>
					<b>Kompetencer:</b> {
						this.props.skills.sort().map(function(skill){
							return skill + "\t";
						})
					}
				</Panel>
			</div>
		);
	}
}