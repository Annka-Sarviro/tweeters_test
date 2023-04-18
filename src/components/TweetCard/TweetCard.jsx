import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { ButtonFollow } from "../TweetCard/TweetCard.styled";
import noImage from "../../assets/avatar.png";
import logo from "../../assets/logo.png";
import formattedNumber from "../../helpers/formatNumber";

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
        <Logo src={logo} alt="GoIt" />
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
        <Text>{formattedNumber(follower)} followers</Text>

        {checked ? (
          <ButtonFollow onClick={onButtonClick}>Following</ButtonFollow>
        ) : (
          <Button onClick={onButtonClick}>Follow</Button>
        )}
      </Card>
    </>
  );
}

export default TweetCard;
