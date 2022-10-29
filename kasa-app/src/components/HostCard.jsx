import React from "react";
import "../styles/HostCard.css";

const HostCard = ({ hostName, picture }) => {
  return (
    <div className="host-card">
      <h3>{hostName}</h3>
      <div className="host-photo">
        <img src={picture} alt="hébergeur"></img>
      </div>
    </div>
  );
};

export default HostCard;
