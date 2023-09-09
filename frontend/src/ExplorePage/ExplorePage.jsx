import './ExplorePage.css'
import React, {useState} from "react";
import {api} from "../../api.jsx";
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ExplorePage() {
  const [searchContent, setSearchContent] = useState("");
  const [userList, setUserList] = useState([]);
  const [searchType, setSearchType] = useState("prefix");

  const handleFocus = () => {

  };

  const handleBlur = () => {

  };

  const handleSearchByPrefix = async (text) => {
    api.getAllUsersMatchingPrefix(text).then((users) => {
      console.log(users);
      setUserList(users);
    })
  };

  const handleSearchBySubstring = async (text) => {
    api.getAllUsersMatchingSubstring(text).then((users) => {
      console.log(users);
      setUserList(users);
    })
  };

  return (
    <div className="explore">

      <div className="explore-container">
        <div className={"search-options"}>

          <textarea style={{flex: 8}} className="search-text-area" id="postContent" name="postContent"
                    value={searchContent}
                    placeholder="Search for a friend"
                    onChange={async (e) => {
                      let text = e.target.value
                      setSearchContent(text)
                      if (searchType === "substring") {
                        await handleSearchBySubstring(text)
                      } else {
                        await handleSearchByPrefix(text)
                      }
                    }}
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
          />
          <div style={{flex: 1}}>Search by</div>

          <ToggleButtonGroup
            color="primary"
            value={searchType}
            exclusive
            onChange={async (event, newSearchType) => {
              if (newSearchType !== null) {
                setSearchType(newSearchType)
                if (searchContent !== "") {
                  if (newSearchType === "substring") {
                    await handleSearchBySubstring(searchContent)
                  } else {
                    await handleSearchByPrefix(searchContent)
                  }
                }
              }
            }}
            aria-label="Platform"
          >
            <ToggleButton value="prefix">Prefix</ToggleButton>
            <ToggleButton value="substring">Substring</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div>
        <ExploreDogs followedUsers={userList} isFollowedDefault={false}></ExploreDogs>
      </div>
    </div>
  )
}


export default ExplorePage

