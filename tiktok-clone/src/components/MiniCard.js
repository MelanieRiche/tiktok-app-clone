
import React from 'react'

const MiniCard = () => {
  return (
    <div className="section minicard">
      <div className="section">
        <img className="user-profile" src="https://i.imgur.com/jONHmE5.png" width={'100%'} alt="Lorem ipsum"/>
        <div>
          <h3 className="bold">Username</h3>
          <p>Name</p>
      </div>
    </div>
      <div className="follow-button">
        Follow
      </div>
    </div>
  )
}
    
export default MiniCard