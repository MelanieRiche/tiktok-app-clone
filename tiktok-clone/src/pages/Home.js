import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState(null)


  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts')
    console.log(results.data)
    setUsers(results.data)
  }

  useEffect(() => {
    addData()
    fetchData()
  }, [])

  return (

    <div className='container'>
      <FollowersColumn />
      <div className='feed'>
        <Card />
      </div>
      <div className="suggested-box">
        <div className="section">
          <div className="suggested">
            <h2 className="bold">Suggested accounts</h2>
            <div className="break" />
              <MiniCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home