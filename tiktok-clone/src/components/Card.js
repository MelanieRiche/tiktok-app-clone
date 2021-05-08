import React from 'react'

const Card = () => {

  return (
    <div className="card">
      <div className="break" />
        <div className="section">
          <div className="user-info">
            <img className="user-profile" src="https://i.imgur.com/jONHmE5.png" width={'100%'} alt="Lorem ipsum"/>
            <div>
            <div className="section">
              <h3 className="bold">Username</h3>
              <p className="username">Name</p>
              <p>Date</p>
            </div> 
            <p>Caption</p>
            </div>
          </div>
          <div className="follow-button">
              Follow
          </div>
        </div>
        <video className="video" controls>
          <source src="https://i.imgur.com/H9UX0Jm.mp4" type="video/mp4" />
        </video>
        <div className="section socials">
           <i class="far fa-heart"></i>
          <div className="social-tag">120</div>
          <i class="far fa-comment-dots"></i>
          <div className="social-tag">21</div>
          <i class="far fa-share-square"></i>
        </div>
    </div>
  )
}

export default Card