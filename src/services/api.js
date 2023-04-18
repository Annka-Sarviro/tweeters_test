import axios from "axios";

axios.defaults.baseURL = "https://643b173944779455735486c8.mockapi.io/users/";

export const getTweetersList = async () => {
  const response = await axios.get(`/`);
  return response.data;
};

export const setFollowingTweeter = async (id, followers, check) => {
  console.log(followers, check);
  const response = await axios.put(`/${id}`, {
    followers: followers,
    checked: check,
  });
  return response;
};
