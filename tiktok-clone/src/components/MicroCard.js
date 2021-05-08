import React from 'react'

const MicroCard = ({ user }) => {

  return (
    <div className="section microcard">
      <img className="user-profile" src={user.avatar} width={'100%'} alt={user.username}/>
      <div>
        <h3 className="bold">{user.name}</h3>
        <p>{user.username}</p>
      </div>
    </div>
  )
}
  
export default MicroCard