import React, {useContext, useEffect, useState} from 'react';
import {IsLoadingContext} from '../Dashboard/Dashboard';
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";
import authService from "../../authService.jsx";
import {api} from "../../api.jsx";
import './ProfilePage.css'
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";

function ProfilePage() {
  const [username, setUsername] = useState(authService.getCurrentUser().username);
  const [age, setAge] = useState(0);
  const [favoriteToy, setFavoriteToy] = useState('');
  const [breed, setBreed] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [followedUsers, setFollowedUsers] = useState([]);

  const switchEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveProfile = async () => {
    await api.updateUserData(age, breed, favoriteToy, location, bio, authService.getCurrentUser().id);
    setIsEditMode(false);
  };

  useEffect(() => {
    api.getUserData(authService.getCurrentUser().id).then((response) => {
      setFavoriteToy(response.toy)
      setAge(response.age)
      setBreed(response.breed)
      setLocation(response.location)
      setBio(response.bio)
      setProfilePicture(response.profilePicture)
    })

    api.getAllUsersFollowedByUser().then((response) => {
      setFollowedUsers(response)
    });

  }, []);


  return (
    <div className="profile-page">
      <div className="profile-headline">
        <div className={"profile-logo-and-name"}>

          <div className={"profile-picture-container"}>
            {profilePicture === null ?
              <ProfilePicture isReadOnly={false}/> :
              <ProfilePicture isReadOnly={false} image={profilePicture}/>}
          </div>
          <h2>{username}'s Profile</h2>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            {isEditMode ? (
              <>
                <div className="input-container">
                  <label htmlFor="age">Age:</label>
                  <input className="edit-input" type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>

                <div className="input-container">
                  <label htmlFor="breed">Breed:</label>
                  <input className="edit-input" type="text" id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}/>
                </div>

                <div className="input-container">
                  <label htmlFor="favoriteToy">Favorite Toy:</label>
                  <input className="edit-input" type="text" id="favoriteToy" value={favoriteToy} onChange={(e) => setFavoriteToy(e.target.value)}/>
                </div>

                <div className="input-container">
                  <label htmlFor="location">Location:</label>
                  <input className="edit-input" type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>

                <div className="input-container">
                  <label htmlFor="bio">Bio:</label>
                  <input className="edit-input" type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
                </div>
                <div className="save-cancel-buttons-container">
                  <button className="save-cancel-buttons-profile" onClick={saveProfile}>Save</button>
                  <button className="save-cancel-buttons-profile" onClick={switchEditMode}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>Age: {age}</p>
                <p>Breed: {breed}</p>
                <p>Favorite Toy: {favoriteToy}</p>
                <p>Location: {location}</p>
                <p>Bio: {bio}</p>
                <div className="edit-button-container">
                  <button className="edit-button" onClick={switchEditMode}>Edit</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="profile-explore">
        <h4 className="friends-headline">friends</h4>
          <ExploreDogs userList={followedUsers} isFollowedDefault={true}></ExploreDogs>
      </div>
    </div>
  );
}

export default ProfilePage;
