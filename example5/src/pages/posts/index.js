import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsList from './list';
import Single from './single';

class PostsPage extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/posts" component={PostsList} />
                <Route exact path="/posts/:id" component={Single} />
            </Switch>
        )

    }
}

export default PostsPage;