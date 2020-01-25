import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './full-post.css';

export default class FullPost extends Component {
    state = {
        post: null,
        redirect: false
    }

    componentDidMount = () => {
        this.updatePost();
    }

    componentDidUpdate = () => {
        this.updatePost()
    }

    updatePost = () => {
        if (this.props.match.params.id) {
            if (!this.state.post || (this.state.post && this.state.post.id !== +this.props.match.params.id)) {
                axios.get('https://bloggy-api.herokuapp.com/posts/' + this.props.match.params.id)
                    .then( resp => {
                        console.log(resp)
                        this.setState({ post: resp.data })
                    })
                    .catch(err => console.log(err))
            }}
    }

    deletePost = () => {
        axios.delete('https://bloggy-api.herokuapp.com/posts/' + this.state.post.id)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        this.setState({redirect: true})
    }


    render() {
        let redirect = this.state.redirect ? <Redirect to='/' /> : null;
        let post = null;
        if (this.state.post) {
            post = (
                <div className="full-post">
                    <h1> {this.state.post.title} </h1>
                    <p> {this.state.post.body} </p>
                    <button onClick={this.deletePost} >Delete Post</button>
                 </div>
            )
        }
        return (
            <div>
                {redirect}
                {post}
            </div>
        )
    }

}