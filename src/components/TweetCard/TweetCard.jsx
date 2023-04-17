import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

function TweetCard({ tweet, onFollowChange }) {
  function onButtonClick(e) {
    e.preventDefault();
    onFollowChange();
  }

  return (
    <li className="" key={tweet.id}>
      <NavLink
        className="flex justify-between cursor-pointer"
        to={`/tweets/${tweet.id}`}
      >
        <img
          className=" "
          src={tweet.avatar}
          alt={tweet.name}
          width={85}
          height={85}
        />
        <div className="">
          <p className="">{tweet.tweets} tweets</p>
          <p className="">{tweet.followers} followers</p>
          <Button onClick={onButtonClick}>Follow</Button>
        </div>
      </NavLink>
    </li>
  );
}

export default TweetCard;
