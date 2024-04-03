import React, { useEffect, useState } from 'react'
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

  const [posts, setPosts] = useState([]);
  const [tweetText, setTweetText] = useState();

  const handlePostOnClick = () => {
    if (tweetText) {
      // post tweet
      
      setTweetText('')
    }
  }

  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL);
    // Parse the response as JSON
    const responseData = await response.json();

    console.log('print: responseData: ', responseData);
  }

  useEffect(() => {
    // fetch posts
    fetchData()
    setPosts(data)
  }, [])

  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-title'>Home</div>
      </div>
      <div className='home-create-tweet'>
        <textarea className='home-create-tweet-text-area' placeholder='What is happening?!' value={tweetText} onChange={(e) => setTweetText(e.target.value)}/>
        <button className='home-create-tweet-button-post' onClick={() => handlePostOnClick()}>Post</button>
      </div>
      {posts.map((d,i) => <Post key={i} name={d.name} username={d.username} message={d.message} date={d.date}/>)}
    </div>
  )
}

export default Home