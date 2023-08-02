import React from 'react'
import PostHeader from './post-header'
import PostImage from './post-image'
import PostFooter from './post-footer'

const Post =() => {
    return (
        <div className='post'>
            <PostHeader/>
            <PostImage/>
            <PostFooter/>
        </div>
    )
}

export default Post