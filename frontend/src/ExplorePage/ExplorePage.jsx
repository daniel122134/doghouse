import './ExplorePage.css'
import React, {useEffect, useState} from "react";
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";


function ExplorePage() {

  const defaultSentence = 'search for a friend..';
  const [searchContent, setSearchContent] = useState(defaultSentence);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchPosts() {
  //
  //     const unfollowedUsers = await api.getAllUsersNotFollowedByUser();
  //     setUsers(unfollowedUsers);
  //   }
  //
  //   fetchPosts();
  // }, []);

  const handleFocus = () => {
    if (searchContent === defaultSentence) {
      setSearchContent("");
    }
  };

  const handleBlur = () => {
    if (searchContent === "") {
      setSearchContent(defaultSentence);
    }
  };

  const handleSearch = async  (e) => {
    e.preventDefault();
    console.log(authService.getCurrentUser().name, 'posted a post');
    window.location.reload();
  };


  return (
      <div className="explore">
        <div className="explore-container">
          <form onSubmit={handleSearch}>
            <textarea className="searchTextArea" id="postContent" name="postContent"
                      value={searchContent}
                      onChange={(e) => setSearchContent(e.target.value)}
                      required
                      onFocus={handleFocus}
                      onBlur={handleBlur}
            />

            <button type="submit" className="submit" onClick={async () => {
              //await api.createPost(postContent); ****add search function
            }}>search</button>
          </form>
        </div>

        <div>
          <ExploreDogs></ExploreDogs>
        </div>

        {/*<div>*/}
        {/*  {users.map((item, index) => (*/}
        {/*      <UserProfileCard key={index} user_id={item.userid}></UserProfileCard>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
  )
}


export default ExplorePage

