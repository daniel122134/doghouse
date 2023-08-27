import React, {useEffect, useState} from 'react';
import defaultProfilePicture from '../assets/default.jpg';
import {api} from "../../api.jsx";
import "./ProfilePicture.css";

function ProfilePicture({ isReadOnly=true, image=defaultProfilePicture}) {
 const [imageUrl, setImageUrl] = useState(defaultProfilePicture);
 
  useEffect(() => {
    setImageUrl(image)
  }, [image]);
  
  const handleImageChange = (event) => {
    const newImageUrl = URL.createObjectURL(event.target.files[0]);
    setImageUrl(newImageUrl)
    
    const formData = new FormData();
    formData.append('my-image-file', event.target.files[0], event.target.files[0].name);
    api.updateProfilePicture(formData).then((response) => {
      console.log(response)
    })

  };
  return (
    <div className="profile-picture">
      
      <img src={imageUrl} alt="Profile" className={"profile-image"}/>
      {isReadOnly ? null : <input type="file" onChange={handleImageChange} accept={".jpg,.png,.svg"}/>}
      

    </div>
  );
}

export default ProfilePicture;
