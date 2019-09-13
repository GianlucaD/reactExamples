import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PostsList from './list';
import Single from './single';

class PostsPage extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/posts" component={PostsList} />
                    <Route exact path="/posts/:id" component={Single} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default PostsPage;