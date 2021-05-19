import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" src="https://lh3.googleusercontent.com/ogw/ADGmqu-yh_NmlP7YFVXn5QiN1LxvnSRcu_SisWvExSWzlDo=s83-c-mo" alt="Mélanie"/>
        </div>
      </div>
    </div>
  )  
}
  
export default Header