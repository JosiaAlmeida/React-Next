import React from 'react'
import './style.css';

export const PostCard = ({title, id, cover, body}) => {
    return (
        <div className="post" >
            <div className="post-content">
                <img src={cover} alt={title} />
                <h1> {title} - {id} </h1>
                <p> {body} </p>
            </div>
        </div>
    );
}