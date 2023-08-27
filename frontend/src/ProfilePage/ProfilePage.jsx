import React, {useContext, useEffect, useState} from 'react';
import {IsLoadingContext} from '../Dashboard/Dashboard';
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";
import authService from "../../authService.jsx";
import {api} from "../../api.jsx";

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
      // Set user data here
    })

  }, []);


  return (
    <div className="profile-page">
      <h1>{username}'s Profile</h1>
      {profilePicture == null ?
        <ProfilePicture/> :
        <ProfilePicture image={profilePicture}/>}
      <div className="profile-info">
        <p>Age: {age}</p>
        <p>Favorite Toy: {favoriteToy}</p>
        <p>Breed: {breed}</p>
        <p>Location: {location}</p>
        <p>Bio: {bio}</p>
        {/* Add more user info fields */}
      </div>
    </div>
  );
}

export default ProfilePage;
