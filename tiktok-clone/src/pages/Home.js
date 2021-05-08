import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState(null)
  let descendingUsers
  let topFiveFollowing
  let topFiveNotFollowing

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

    // For "Your top accounts" - microcard
    const following = users.filter(user => user.is_followed)
    const descendingFollowing = following.sort((a,b) => a.likes < b.likes ? 1 : -1)
    topFiveFollowing =  descendingFollowing.slice(0,5)

    // For "suggested accounts" - minicard
    const notFollowing = users.filter(user => user.is_followed)
    const descendingNotFollowing = notFollowing.sort((a,b) => a.likes < b.likes ? 1 : -1)
    topFiveNotFollowing =  descendingNotFollowing.slice(0,5)
  }

  // console.log(descendingUsers)
  // console.log(topFiveFollowing)

  return (
    <>
    { descendingUsers && (
      <div className='container'>
        <FollowersColumn users={topFiveFollowing} />
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
              {topFiveNotFollowing.map((notFollowingUser, index) => (
                <MiniCard 
                key={index}
                user={notFollowingUser}
                />))}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Home