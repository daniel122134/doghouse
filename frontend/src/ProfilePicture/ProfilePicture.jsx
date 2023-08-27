import React, {useEffect, useState} from 'react';
import defaultProfilePicture from '../assets/default.jpg';

function ProfilePicture({ isReadOnly, image=defaultProfilePicture}) {
 

  const handleImageChange = (event) => {
    const newImageUrl = URL.createObjectURL(event.target.files[0]);
    // Here, you can implement logic to update the profile picture on the server
  };

  return (
    <div className="profile-picture">
        <img src={image} alt="Profile" />
    </div>
  );
}

export default ProfilePicture;
