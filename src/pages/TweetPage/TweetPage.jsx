import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTweetersList, setFollowingTweeter } from "../../services/api";
import TweetList from "../../components/TweetList/TweetList";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import getFilteredTweets from "../../helpers/getFilteredTweets";

function TweetPage() {
  const [tweets, setTweets] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("showAll");
  const [checked, setChecked] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchTweetersList() {
      try {
        const data = await getTweetersList();
        const filteredData = getFilteredTweets(filter, data);
        setTweets(filteredData);
        setIsLoading(true);
        setChecked(true);
      } catch (error) {
        console.log({ error });
      }
    }

    fetchTweetersList();
  }, [filter, checked]);

  useEffect(() => {
    if (!tweets) {
      return;
    }
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(tweets.slice(0, endOffset));
  }, [tweets, itemOffset]);

  const handlePageClick = () => {
    const newOffset = itemOffset + itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleFollowChange = async (id) => {
    const data = await getTweetersList();
    const clickTweet = data.filter((tweet) => tweet.id === id)[0];
    const checkTweet = clickTweet.checked;

    setFollowingTweeter(
      id,
      checkTweet ? +clickTweet.followers - 1 : +clickTweet.followers + 1,
      !checkTweet ? true : false
    );
    setChecked(false);
  };

  const handleOptionChange = async (filtername) => {
    setFilter(filtername);
  };

  return (
    <>
      {!isLoading ? (
        <div>is load</div>
      ) : (
        <>
          <NavLink to={`/`}>
            <Button>Go Home</Button>
          </NavLink>
          <Filter onFilterChange={handleOptionChange} />
          <TweetList
            onPageChange={handlePageClick}
            tweets={currentItems}
            onFollowChange={handleFollowChange}
          />
        </>
      )}
    </>
  );
}

export default TweetPage;
