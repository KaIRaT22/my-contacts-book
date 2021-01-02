import React, { Component } from 'react';
import axios from 'axios';
import ContactList from './contacts/ContactList';

// import TodoList from './Todo/TodoList'

const API = 'https://my-json-server.typicode.com/RomanChasovitin/demo-api/users';

class Get extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {

        axios.get(API)
            .then(result => {
                this.setState({contacts: result.data.data})
                console.log(result.data.data)
                this.setState({loading: false})
            })
            .catch(error => this.setState({
                error
            }));
    }

    render() {
        const { contacts } = this.state;

        return (
            <div className='App'>
                <h1>React tutorial</h1>
                <ContactList contacts={contacts} />
            </div>
          )
    }
}

export default Get;
