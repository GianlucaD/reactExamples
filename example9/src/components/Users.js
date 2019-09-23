import React, { Component } from 'react'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {
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
        )
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=50")
            .then(response => response.json())
            //                .then(users => this.setState({ users }))
            .then(data => {
                console.log(data.results);
                this.setState({ users: data.results })
            })
            .catch(e => console.error(e));
    }
}
