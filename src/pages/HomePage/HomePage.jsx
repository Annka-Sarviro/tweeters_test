import { useState, useEffect } from "react";
import { getTweetersList } from "../../services/api";
import TweetList from "../../components/TweetList/TweetList";

function HomePage() {
  const [tweets, setTweets] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchTweetersList() {
      try {
        const data = await getTweetersList();
        setTweets(data);
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
    console.log("click");
    const newOffset = itemOffset + itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleFollowChange = () => {
    console.log("twet click");
  };

  return (
    <div className="">
      <h1>Tweeters</h1>
      <TweetList
        onPageChange={handlePageClick}
        tweets={currentItems}
        onFollowChange={handleFollowChange}
        // disabled={currentItems?.length >= tweets?.length ? true : false}
      />
    </div>
  );
}

export default HomePage;
