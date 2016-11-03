import React from "react";
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Contacts from "./pages/Contacts";

const app = document.getElementById('app');

var dummy_contacts = JSON.stringify([
	{name: "Mads Justesen", email: "mads@mail.dk", skills: ["JavaScript", "C#", "Databaser", "Webservices", "Systemarkitektur"]},
	{name: "Karsten Jensen", email: "karsten@mail.dk", skills: ["C#", "JavaScript"]},
	{name: "Morten Olsen", email: "olsen@mail.dk", skills: ["Webservices", "Databaser", "JavaScript"]}
]);

if(localStorage.getItem('contacts') == null) {
	localStorage.setItem("contacts", dummy_contacts);
}

ReactDOM.render(<Contacts />, app);