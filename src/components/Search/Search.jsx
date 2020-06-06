import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../useDropdown/useDropdown.jsx";
import Results from "../Results/Results.jsx";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA"); // API Used only supports only Seattle and San fransisco
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  /**
   * Async function to request data from the pet Api
   *
   */
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

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
      <form
        onSubmit={(e) => {
          console.log("requesting API");
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};

export default Search;
