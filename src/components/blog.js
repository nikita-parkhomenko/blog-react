import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import AllPosts from './all-posts/all-posts';
import NewPost from './new-post/new-post';
import FullPost from './full-post/full-post';

import './blog.css';

export default class Blog extends Component {
    render() {
        return(
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink exact to='/' > All Posts </NavLink> </li>
                            <li> <NavLink to='/new-post' > New Post </NavLink> </li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={AllPosts} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        )
    }
}