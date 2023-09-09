import React, {useEffect, useState} from "react";
import {api} from "../../api.jsx";
import "./UserProfileCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";

function UserProfileCard({user_id, isFollowed, mode, removeUserCallBack}) {
  const [userData, setUserData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(isFollowed);

  useEffect(() => {
    const fetchUserData = async () => {

      const response = await api.getUserData(user_id);
      setUserData(response);
      api.getIsFollowing(user_id).then((response) => {
        setIsFollowing(response.isFollowing)
      })
      
    };

    fetchUserData();
  }, [user_id]);

  async function handleDeleteUser() {
    try {
      await api.deleteUser(user_id);
      removeUserCallBack(user_id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  
  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await api.unfollowUser(user_id);
        // todo - call a callback function to remove the user from the list of the container
      } else {
        await api.followUser(user_id);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  return (
    <div className="user-profile-card">
      {userData && (
        <>
        <div className={"thumbnail-container"}>
          <ProfilePicture isReadOnly={true} image={userData.profilePicture} />
        </div>
          <h3 className="username">{userData.username}</h3>
          {mode=="follow" ? <button className={isFollowing ? "unfollow-button" : "follow-button"} onClick={handleFollowToggle}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>: <button className={"unfollow-button"} onClick={handleDeleteUser}>
            {"Bad Dog"}
          </button>}
          
        </>
      )}
    </div>
  );
}

export default UserProfileCard;
