import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AddPersonForm(){

    const [person, setPerson] = useState('');

    function handleChange(e){setPerson(e.target.value)}

    function handleSubmit(e, props){
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    return (<form onSubmit={handleSubmit}>
        <input type="text" placeholder="add new contact" value={person} onChange={handleChange}/>
        <button type="submit">Add Person</button>
    </form>);
}


function PeopleList(props){
    const arr = props.data
    const listItems = arr.map((val, index) => <li key={index}>{val}</li>);

    return (<ul>{listItems}</ul>);
}

// Lifting the state- because the above components are each keeping their states to themselves
// Lifting the state means passing data from the parent to the child
// In this case, the ContactManager is the parent & is passing data to the AddPersonform & PeopleList
// It recieves the initial contacts list using props, saves it in its state. Then passes it down to the child component
// Data can only be passed from the parent to the child & not vice-versa
function ContactManager(props){
    const [contacts, setContacts] = useState(props.data);
    
    function addPerson(name){
        setContacts([...contacts, name])
    }
    return (<div>
        <AddPersonForm handleSubmit={addPerson}/>
        <PeopleList data={contacts}/>
    </div>);
}

const contacts = ["Samuel Kinuthia", "Rai Omido", "John Kiega", "Joshua Omido"];

ReactDOM.render(
    <ContactManager data={contacts}/>, 
    document.getElementById('root'));
export default AddPersonForm;