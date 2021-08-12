import React from 'react'
import { PostCard } from '../PostCard';
import './style.css';

export const Post = ({posts}) => {
    return (
        <div className="posts">
          {
            posts.map(post => (
              <PostCard key={post.id} {...post} />
            ))
          }
        </div>
    );
}