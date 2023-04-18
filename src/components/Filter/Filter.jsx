import { Select } from "./Filter.styled";

export default function Filter({ onFilterChange }) {
  function handleOptionChange(e) {
    e.currentTarget.value;
    onFilterChange(e.currentTarget.value);
  }
  return (
    <>
      <label htmlFor="filter"></label>
      <Select name="filter" id="filter" onChange={handleOptionChange}>
        <option value="showAll">show all</option>
        <option value="follow">follow</option>
        <option value="followings">followings</option>
      </Select>
    </>
  );
}
