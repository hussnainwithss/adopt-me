import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../useDropdown/useDropdown.jsx";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA"); // API Used only supports only Seattle and San fransisco
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  /**
   * useEffect called everytime a dropdown option is changed either breed or animal
   */
  useEffect(() => {
    setBreeds([]); //to clear out previous selections when selecting a new breed
    setBreed("");

    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      (err) => console.error(err)
    );
  }, [animal, setBreed, setBreeds]); // dependency array makes sure useEffect is only called when any of these change

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
