import TweetCard from "../../components/TweetCard/TweetCard";

function TweetList({ tweets, onPageChange }) {
  if (!tweets) {
    return;
  }

  function onButtonClick(e) {
    e.preventDefault();
    onPageChange();
  }

  return (
    <>
      <ul className="mx-[auto] max-w-[1400px] ">
        {tweets.map((tweet) => {
          return <TweetCard tweet={tweet} key={tweet.id} />;
        })}
      </ul>
      <button onClick={onButtonClick}>Load more</button>
    </>
  );
}

export default TweetList;
