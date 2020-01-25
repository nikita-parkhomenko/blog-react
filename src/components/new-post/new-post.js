import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './new-post.css';

export default class NewPost extends Component {

state = {
    title: '',
    body: '',
    redirect: false
}

createNewPost = () => {
    const post = {
        title: this.state.title,
        body: this.state.body
    };

    axios.post('https://bloggy-api.herokuapp.com/posts/', post)
        .then( resp => {
            console.log(resp);
            this.setState({ redirect: true })
        })
}

    render() {

        const redirect = this.state.redirect ? <Redirect to="/" /> : null;

        return(
            <section className="new-post">
                {redirect}
                <h1>Create a new post</h1>
                <label>Title</label>
                <input type='text' value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows='4' type='text' value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
                <button onClick={this.createNewPost}>Create new post</button>
            </section>
        )
    }
}