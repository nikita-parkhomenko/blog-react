import React from 'react';

import './post.css';

export const Post = ({ title, body, clicked }) => {
    return(
        <div className="post" onClick={clicked}>
            <h3> {title} </h3>
            <p> {body} </p>
        </div>
    )
}