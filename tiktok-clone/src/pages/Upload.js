import React, { useState } from 'react'
import faker from 'faker'


const Upload = () => {
  const username = 'rchmelanie'
  const name = 'Mélanie Riché'
  const avatar = 'https://lh3.googleusercontent.com/ogw/ADGmqu-yh_NmlP7YFVXn5QiN1LxvnSRcu_SisWvExSWzlDo=s83-c-mo'
  let id = faker.random.uuid()
  const today = new Date()
  const timestamp = today.toISOString()
  const [video, setVideo] = useState(null)
  const [caption, setCaption] = useState(null)

  console.log(caption)

  const data = {
    id: id,
    name: name,
    username: username,
    avatar: avatar,
    is_followed: false,
    video: video,
    caption: caption,
    likes: 0,
    comments: 0,
    timestamp: timestamp,
    button_visible: false,
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="upload-page">
        <br />
        <h1>Upload video</h1>
        <p>This video will be published to @username</p>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='section'>
              <div className="image-upload"></div>
              <div className="form-section">
                <div className='section input-section'>
                  <label className="bold">Caption</label>
                  <input
                    className='input'
                    name='caption'
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>
                <div className="break"></div>
                <div className='section input-section'>
                  <label className="bold">Video Url</label>
                  <input
                    className='input'
                    name='video'
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </div>
              </div>
            </div>			
            <button>Post</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Upload;