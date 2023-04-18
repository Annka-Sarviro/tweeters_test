import TweetCard from "../TweetCard/TweetCard";
import Button from "../Button/Button";
import { List } from "./TweetList.styled";

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
      <List>
        {tweets.map((tweet) => {
          return (
            <TweetCard
              tweet={tweet}
              key={tweet.id}
              onFollowChange={onFollowChange}
            />
          );
        })}
      </List>
      <Button onClick={onButtonClick}>Load more</Button>
    </>
  );
}

export default TweetList;
