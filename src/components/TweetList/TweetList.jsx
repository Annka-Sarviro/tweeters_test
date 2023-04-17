import TweetCard from "../TweetCard/TweetCard";
import Button from "../Button/Button";

function TweetList({ tweets, onPageChange, onFollowChange }) {
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
          return (
            <TweetCard
              tweet={tweet}
              key={tweet.id}
              onFollowChange={onFollowChange}
            />
          );
        })}
      </ul>
      <Button onClick={onButtonClick}>Load more</Button>
    </>
  );
}

export default TweetList;
