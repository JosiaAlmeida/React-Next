import React from 'react'
import './style.css';

export const Button = ({onClick, disabled}) =>{
    return(
        <button
         disabled = {disabled}
         className="button"
         onClick={onClick}
        >Load More Post</button>
    );
}