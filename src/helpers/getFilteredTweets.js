function getFilteredTweets(name, data) {
  if (!data) {
    return;
  }
  let res;
  switch (name) {
    case "showAll":
      res = data;
      break;
    case "follow":
      res = data.filter((tweet) => tweet.checked === false);
      break;
    case "followings":
      res = data.filter((tweet) => tweet.checked === true);
      break;
    default:
      break;
  }
  return res;
}

export default getFilteredTweets;
