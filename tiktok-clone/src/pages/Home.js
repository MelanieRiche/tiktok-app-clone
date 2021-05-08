import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState(null)
  let descendingUsers

  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts')
    // console.log(results.data)
    setUsers(results.data)
  }

  useEffect(() => {
    addData()
    fetchData()
  }, [])

  // Sorting posts by id
  if ( users ) {
    descendingUsers = users.sort((a,b) => a.id < b.id ? 1 : -1)
  }
  console.log(descendingUsers)

  return (
    <>
    { descendingUsers && (
      <div className='container'>
        <FollowersColumn />
        <div className='feed'>
          {descendingUsers.map((descendingUser, index) => (
            <Card 
            key={index}
            user={descendingUser}
            />
          ))}
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
    )}
    </>
  )
}

export default Home