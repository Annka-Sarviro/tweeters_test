import { NavLink } from "react-router-dom";
// import getDays from "../../helpers/getDays";
// import { MapPinIcon } from "@heroicons/react/24/solid";
// import { BookmarkIcon } from "@heroicons/react/24/outline";
// import { StarIcon } from "@heroicons/react/24/solid";

function TweetCard({ tweet }) {
  //   const location = useLocation();
  //   const days = getDays(job.createdAt);

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
          <button type="button">Follow</button>
        </div>
      </NavLink>
    </li>
  );
}

export default TweetCard;
