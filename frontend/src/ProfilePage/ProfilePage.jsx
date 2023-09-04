import React, {useContext, useEffect, useState} from 'react';
import {IsLoadingContext} from '../Dashboard/Dashboard';
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";
import authService from "../../authService.jsx";
import {api} from "../../api.jsx";
import './ProfilePage.css'
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";


function ProfilePage() {
  const [isLoading] = useContext(IsLoadingContext); // You can use isLoading if needed
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
    await api.updateUserData(age, breed, favoriteToy, location, bio);
    setIsEditMode(false); // Exit edit mode
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


          <div className={"profilePictureContainer"}>
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
                <input className="edit-input" type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                <input className="edit-input" type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
                <input className="edit-input" type="text" value={favoriteToy}
                       onChange={(e) => setFavoriteToy(e.target.value)}/>
                <input className="edit-input" type="text" value={location}
                       onChange={(e) => setLocation(e.target.value)}/>
                <input className="edit-input" type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
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
      <h4>friends</h4>

      <div className="profile-explore">
          <ExploreDogs followedUsers={followedUsers} isFollowedDefault={true}></ExploreDogs>
      </div>

    </div>
  );
}

export default ProfilePage;
