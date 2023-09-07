import './ExplorePage.css'
import React, {useEffect, useState} from "react";
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";


function ExplorePage() {

  const defaultSentence = 'search for a friend..';
  const [searchContent, setSearchContent] = useState(defaultSentence);
  const [userList, setUserList] = useState([]);
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
    api.getAllUsersMatchingPrefix(searchContent).then((users) => {
      console.log(users);
      setUserList(users);
    })
    // refesh page and clear search bar or whatever is needed
  };


  function searchDogs(searchContent) {
    console.log(searchContent);
    // search for dogs
  }

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
              searchDogs(searchContent);
            }}>search</button>
          </form>
        </div>

        <div>
          <ExploreDogs followedUsers={userList} isFollowedDefault={false}></ExploreDogs>
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

