import React from 'react'
import profile from '../assets/default-profile.jpg'
import '../styles/HostCard.css'

const HostCard = (props) => {
  return (
    <div className='host-card'>
      <h3>{props.hostName}</h3>
      <div className='host-photo'>
        <img src={profile} alt="hébergeur"></img>
      </div>
    </div>
  )
}

export default HostCard;