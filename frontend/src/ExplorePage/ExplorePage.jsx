import './ExplorePage.css'
import React, {useContext, useEffect, useState} from "react";
import {api} from "../../api.jsx";
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {shouldEnableSearchOptionsContext} from "../Dashboard/Dashboard.jsx";


function ExplorePage() {
  const [searchContent, setSearchContent] = useState("");
  const [userList, setUserList] = useState([]);
  const [searchType, setSearchType] = useState("prefix");
  const [shouldEnableSearchOptions, setShouldEnableSearchOptions] = useContext(shouldEnableSearchOptionsContext)

  useEffect(() => {
    findUsers()
  }, [])
  
  const handleFocus = () => {

  };

  const handleBlur = () => {

  };
  
  async function findUsers(search, currentSearchType) {
    if (search == null || search === "") {
      api.getAllUsers().then(users => setUserList(users))
    } else {
      currentSearchType = currentSearchType || searchType
      if (currentSearchType === "substring") {
        await handleSearchBySubstring(search)
      } else {
        await handleSearchByPrefix(search)
      }
    }
  }

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
                      await findUsers(text)
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
                  await findUsers(searchContent, newSearchType)
                }
              }
            }}
            aria-label="Platform"
          >
            <ToggleButton value="prefix">Prefix</ToggleButton>
            <ToggleButton value="substring" disabled={!shouldEnableSearchOptions}>Substring</ToggleButton>
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

