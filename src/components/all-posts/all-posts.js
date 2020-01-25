import React, {Component} from 'react';
import axios from 'axios';

import Spinner from '../UI/spinner/spinner';
import {Post} from './post/post';

import './all-posts.css';


export default class AllPosts extends Component {

    state = {
        posts: [],
        loading: true
    }

    componentDidMount() {
        console.log(this.props )
        axios.get('https://bloggy-api.herokuapp.com/posts/')
            .then( resp => this.setState({ posts: resp.data, loading: false }))
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/' + id);
    }

    render() {

        if(this.state.loading) {
            return <Spinner />
        }

        return(
            <section className="all-posts">
                <h1>Posts</h1>
                <div className="posts-wrapper">
                    {this.state.posts.map( post => (
                            <Post clicked={ () => this.postSelectedHandler(post.id)}
                             key={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
            </section>
        )
    }
}