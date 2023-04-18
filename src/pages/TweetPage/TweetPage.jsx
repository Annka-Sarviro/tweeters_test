import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTweetersList, setFollowingTweeter } from "../../services/api";
import TweetList from "../../components/TweetList/TweetList";
import Button from "../../components/Button/Button";

function TweetPage() {
  const [tweets, setTweets] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchTweetersList() {
      try {
        const data = await getTweetersList();
        setTweets(data);
        setIsLoading(true);
      } catch (error) {
        console.log({ error });
      }
    }

    fetchTweetersList();
  }, []);

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
  };

  return (
    <>
      {!isLoading ? (
        <div>is load</div>
      ) : (
        <>
          <NavLink to={`/tweeters_test/`}>
            <Button>Go Home</Button>
          </NavLink>
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
