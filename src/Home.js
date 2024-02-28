import React from 'react'
import './Home.scss'
import Post from './Post'

const data = [
  {
    name: 'Juancito123',
    username: 'juan123',
    message: 'this is my tweet',
    date: '2024-02-13T18:09:40.331Z',
  },
  {
    name: 'Pedro456',
    username: 'pedro456',
    message: 'cool tweet',
    date: '2024-02-10T18:09:40.331Z',
  },
]

const Home = () => {

  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-title'>Home</div>
      </div>
      <div className='home-create-tweet'>
        <textarea className='home-create-tweet-text-area' placeholder='What is happening?!'/>
        <button className='home-create-tweet-button-post'>Post</button>
      </div>
      {data.map((d) => <Post name={d.name} username={d.username} message={d.message} date={d.date}/>)}
    </div>
  )
}

export default Home