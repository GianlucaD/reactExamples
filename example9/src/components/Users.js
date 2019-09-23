import React, { Component } from 'react'
import axios from 'axios';
export default class Users extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            users: [],
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get("https://randomuser.me/api/?results=50")
            .then(response => {
                return response.data.results;
            })
            .then(users => {
                this.setState({ users: users })
                //                this.setState({ users: data.results })
            })
            .catch(e => console.error(e));
    }
    componentDidMount() {
        // try to simulate latency
        setTimeout(
            this.getData
            , 3000);
    }
    render() {
        /*
        const users = this.state.users.map((user, ind) => {
            return <li key={ind}>
                {user.name.first}
            </li>;
 
        })
        */
        if (this.state.users.length === 0) {
            return (<div>Loading...</div>);
        }
        else {
            return (
                <div>
                    <ul>
                        {this.state.users.map((data, ind) => {
                            return (<li key={ind}>
                                {data.name.first}
                            </li>)
                        }

                        )}
                    </ul>
                </div>

            );
        }
        /* withoud axios: 
        fetch("https://randomuser.me/api/?results=50")
            .then(response => response.json())
            //                .then(users => this.setState({ users }))
            .then(data => {
                console.log(data.results);
                this.setState({ users: data.results })
            })
            .catch(e => console.error(e));
            */
    }
}
