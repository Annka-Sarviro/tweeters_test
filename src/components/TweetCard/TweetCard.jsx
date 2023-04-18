import { useState, useEffect } from "react";
import Button from "../Button/Button";
import noImage from "../../assets/avatar.png";

import {
  Card,
  Logo,
  ImgContainer,
  ImgThumb,
  Avatar,
  Line,
  Text,
} from "./TweetCard.styled";

function TweetCard({ tweet, onFollowChange }) {
  const [checked, setChecked] = useState(false);
  const [follower, setFollower] = useState(tweet.followers);

  useEffect(() => {
    if (!tweet) {
      return;
    }
    setChecked(tweet.checked);
  }, []);

  function onButtonClick(e) {
    onFollowChange(tweet.id, checked);
    setChecked(!checked ? true : false);
    const currFollower = !checked ? +follower + 1 : +follower - 1;
    setFollower(currFollower);
  }

  return (
    <>
      <Card>
        <Logo src="../../src/assets/logo.png" alt="GoIt" />
        <ImgContainer />
        <Line />
        <ImgThumb>
          {tweet.avatar ? (
            <Avatar src={`${tweet.avatar}`} alt={tweet.name} />
          ) : (
            <Avatar src={noImage} alt={tweet.name} />
          )}
        </ImgThumb>
        <Text>{tweet.tweets} tweets</Text>
        <Text>{follower} followers</Text>

        {checked ? (
          <Button onClick={onButtonClick} checked={tweet.checked}>
            Following
          </Button>
        ) : (
          <Button onClick={onButtonClick} checked={tweet.checked}>
            Follow
          </Button>
        )}
      </Card>
    </>
  );
}

export default TweetCard;
