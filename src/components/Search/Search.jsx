import React, { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA"); // API Used only supports only Seattle and San fransisco

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Search;
