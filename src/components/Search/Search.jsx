import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../useDropdown/useDropdown.jsx";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA"); // API Used only supports only Seattle and San fransisco
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
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
        <AnimalDropdown />
        <BreedDropdown />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Search;
