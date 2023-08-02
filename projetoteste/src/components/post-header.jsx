import React from 'react'
import {BsThreeDots} from 'react-icons/bs'

const PostHeader =() => {
    return (
        <div className='post-header'>
            <div className='column-left'> 
            <div className='post-avatar'>
                <img src="https://placehold.co/40x40" alt="" />
            </div>
                <div className='post-name'>
                    <h5>
                        ChampionsLeague
                    </h5>
                    <h6>
                        música
                    </h6>
                </div>
            </div>
            <div className='column-right'>
            <BsThreeDots/>
            </div>
        </div>
    )
}

export default PostHeader