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

  const handleSearchByPrefix = async  (e) => {
    e.preventDefault();
    api.getAllUsersMatchingPrefix(searchContent).then((users) => {
      console.log(users);
      setUserList(users);
    })
    // refesh page and clear search bar or whatever is needed
  };

  const handleSearchBySubstring = async  (e) => {
    e.preventDefault();
    api.getAllUsersMatchingSubstring(searchContent).then((users) => {
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
          <form onSubmit={handleSearchByPrefix}>
            <textarea className="searchTextArea" id="postContent" name="postContent"
                      value={searchContent}
                      onChange={(e) => setSearchContent(e.target.value)}
                      required
                      onFocus={handleFocus}
                      onBlur={handleBlur}
            />

            <button type="submit" className="explore-submit" onClick={async () => {
              searchDogs(searchContent);
            }}>search by prefix</button>
          </form>
          <form onSubmit={handleSearchBySubstring}>
            <button type="submit" className="explore-submit" onClick={async () => {
              searchDogs(searchContent);
            }}>search by substring</button>
          </form>
        </div>

        <div>
          <ExploreDogs followedUsers={userList} isFollowedDefault={false}></ExploreDogs>
        </div>
      </div>
  )
}


export default ExplorePage

