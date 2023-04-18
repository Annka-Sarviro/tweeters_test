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
  function onButtonClick(e) {
    onFollowChange(tweet.id);
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
        <Text>{tweet.followers} followers</Text>
        <Button onClick={onButtonClick} checked={tweet.checked}>
          Follow
        </Button>
      </Card>
    </>
  );
}

export default TweetCard;
