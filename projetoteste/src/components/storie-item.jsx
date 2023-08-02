import React from 'react'
import Avatar from './avatar'

const StoriesItem =(props) => {
    return (
        <div className='storie-item'>
        <Avatar/>
        <h5>{props.name}</h5>
        </div>
    )
}

export default StoriesItem