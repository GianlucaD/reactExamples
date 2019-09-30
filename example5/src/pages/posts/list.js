import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsList extends Component {

    state =  {
        posts: []
    }
    render() {
        return (
            <div>
                <h1>Posts list</h1>
                <ul>
                {this.state.posts.map((post) => (
                    <li>
                        <Link to={/posts/ + post.id}>{post.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState( {posts: json}));
            console.log("posts:", this.state.posts);
    }

    componentWillUnmount(){
        console.log("componentDidMount");
    }
}

export default PostsList;