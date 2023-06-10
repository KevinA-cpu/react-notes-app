import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchTask }) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg pl-4 mb-6 py-3">
      <MdSearch size="1.3em" />
      <input
        onChange={(event) => handleSearchTask(event.target.value)}
        className="ml-2 border-none bg-gray-200 w-full focus:outline-none"
        placeholder="Type to filter tasks status..."
      />
    </div>
  );
};

export default Search;
