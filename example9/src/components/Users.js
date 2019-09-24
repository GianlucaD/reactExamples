import React, { Component } from 'react'
import axios from 'axios';
export default class Users extends Component {

    state = {
        users: []
    };

    componentDidMount() {
            axios.get("/?results=50")
                .then(response => {
                    this.setState({ users: response.data.results });
                }, )
                .catch(e => console.error(e))
    }
    render() {
        if (this.state.users.length === 0) {
            return (<div>Loading...</div>);
        }
        else {
            console.log(this.state.users);
            return (
                <div>
                    <ul>
                        {this.state.users.map((data, ind) => {
                            return <li key={ind}>
                                {data.name.first}
                            </li>;
                        }
                        )}
                    </ul>
                </div>
            );
        }
    }
}
