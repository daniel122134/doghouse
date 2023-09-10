import React, {useContext, useEffect, useState} from "react";
import './FeedPage.css'
import {api} from "../../api.jsx";
import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";
import "./Post.css";
import {
    shouldEnableEditPostContext,
    shouldEnableSharePostButtonContext,
    shouldEnableUnlikePostContext
} from "../Dashboard/Dashboard.jsx";

function Post({content, postId, timeStamp, posterId}) {
    const [likeNumberText, setLikeNumberText] = useState("0");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [postTimeStamp, setPostTimeStamp] = useState(timeStamp);
    const [postContent, setPostContent] = useState(content);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedContent, setEditedContent] = useState(content);
    const [profilePicture, setProfilePicture] = useState(null);
    const [userName, setUsername] = useState(null);
    const [shouldEnableEditPost, setShouldEnableEditPost] = useContext(shouldEnableEditPostContext);
    const [shouldEnableSharePostButton, setShouldEnableSharePostButton] = useContext(shouldEnableSharePostButtonContext);
    const [shouldEnableUnlikePost, setShouldEnableUnlikePost] = useContext(shouldEnableUnlikePostContext);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleSaveClick = async () => {
        await api.editPostContent(postId, editedContent);
        setPostContent(editedContent);
        const timeStamp = (await api.getPostUpdateTime(postId))[0].updateTime;
        setPostTimeStamp(timeStamp);
        setIsEditMode(false);
    };
    
    const handleSharePost = async () => {
        window.open(`mailto:?subject=post%20by%20${userName}&body=Post content:%0D${postContent}`);
    }

    const handleCancelClick = () => {
        setEditedContent(content);
        setIsEditMode(false);
    };

    async function loadLikeNumber() {
        const currentLikeNumber = (await api.getPostLikeNumber(postId))[0].likeCount;
        setLikeNumberText(currentLikeNumber);
    }

    async function loadIsLikedByUser() {
        const likeNumberByUser = (await api.getPostLikeNumberByUser(postId))[0].likeCount;
        if (likeNumberByUser === 1) {
            setButtonDisabled(true);
        }
    }

  useEffect(() => {
      loadIsLikedByUser()
      loadLikeNumber()
      api.getUserData(posterId).then((response) => {
          setProfilePicture(response.profilePicture)
          setUsername(response.username)
      })
      
  }, [shouldEnableEditPost]);
  
  return (
      <div className="posts">
          <div className="post">
              <div className="post-header">
                  <div className={"thumbnail-container photo-in-post"}>
                    <ProfilePicture image={profilePicture} />
                  </div>
                  <h3 className={"post-header-publisher"}>{userName} </h3>
                  <h6>Updated at: {postTimeStamp}</h6>
              </div>
              {isEditMode ? (
                  <textarea className="edit-text-area" value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                  />
              ) : (
                  <div className="not-edit">
                      <div className="post-content">{postContent}</div>
                      {shouldEnableEditPost ? (
                      <div className="edit-button-container">
                          <button className="edit-button" onClick={handleEditClick}>Edit</button>
                      </div>) : null}
                  </div>

              )}

              {isEditMode ? (
                  <>
                      <div className="save-cancel-buttons-container">
                          <button className="save-cancel-buttons" onClick={handleSaveClick}>Save</button>
                          <button className="save-cancel-buttons" onClick={handleCancelClick}>Cancel</button>
                      </div>
                  </>
              ) : (
                  <div className={"post-actions"}>
                      {shouldEnableSharePostButton ? (
                      <button className="share" onClick={async () => {
                          await handleSharePost()
                      }}>Share</button>) : null}
                      <div className="likes-container">
                          {!buttonDisabled && (
                              <button className="like" disabled={buttonDisabled} onClick={async () => {
                                  setButtonDisabled(true);
                                  await api.addLike(postId);
                                  await loadLikeNumber();
                              }}>Bark</button>
                          )}
                          {buttonDisabled && shouldEnableUnlikePost ? (
                              <button className="like" disabled={!buttonDisabled} onClick={async () => {
                                  setButtonDisabled(false);
                                  await api.removeLike(postId);
                                  await loadLikeNumber();
                              }}>UnBark</button>
                          ) : null}
                          <p className={"bark-count"}>{likeNumberText} Barks</p>
                      </div>

                  </div>
              )}
          </div>
      </div>
  )
}

export default Post

