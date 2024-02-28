import React from 'react'
import './Post.scss'

const Post = ({name, username, message, date}) => {
  function hoursAgoFromTimestamp(timestamp) {
    var date = new Date(timestamp);
    var currentTime = new Date().getTime();
    var timestampTime = date.getTime();
    var timeDifference = currentTime - timestampTime;
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    return hours;
  }
  return (
    <div className='post'>
      <div className='post-header'>
        <div className='post-header-name'>{name}</div>
        <div className='post-header-username secondary-text'>{`@${username}`}</div>
        <div className='post-header-date secondary-text'>{`${hoursAgoFromTimestamp(date)}h`}</div>
      </div>
      <div className='post-message'>{message}</div>
    </div>
  )
}

export default Post