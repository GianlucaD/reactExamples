import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsList extends Component {
    render() {
        return (
        <div>
            <h1>Posts list</h1>
            <ul>
                <li><Link to="/posts/1">Post one</Link></li>
                <li><Link to="/posts/2">Post two</Link></li>
                <li><Link to="/posts/3">Post three</Link></li>
            </ul>
        </div>
        )
    }
}

export default PostsList;