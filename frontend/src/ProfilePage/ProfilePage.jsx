import React, {useContext, useEffect, useState} from 'react';
import {IsLoadingContext} from '../Dashboard/Dashboard';
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";
import authService from "../../authService.jsx";
import {api} from "../../api.jsx";
import './ProfilePage.css'



function ProfilePage() {
  const [isLoading] = useContext(IsLoadingContext); // You can use isLoading if needed
  const [username, setUsername] = useState(authService.getCurrentUser().username);
  const [age, setAge] = useState(0);
  const [favoriteToy, setFavoriteToy] = useState('');
  const [breed, setBreed] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    
    api.getUserData(authService.getCurrentUser().id).then((response) => {
      
      setFavoriteToy(response.toy)
      setAge(response.age)
      setBreed(response.breed)
      setLocation(response.location)
      setBio(response.bio)
      setProfilePicture(response.profilePicture)

    })

  }, []);


  return (
    <div className="profile-page">
      <div className="profile-headline">
        <h2>{username}'s Profile</h2>
        {profilePicture === null ?
          <ProfilePicture isReadOnly={false} /> :
          <ProfilePicture isReadOnly={false} image={profilePicture}/>}
      </div>
      <div className="profile-info">
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Favorite Toy: {favoriteToy}</p>
        <p>Location: {location}</p>
        <p>Bio: {bio}</p>
        {/* Add more user info fields */}
      </div>
    </div>
  );
}

export default ProfilePage;
