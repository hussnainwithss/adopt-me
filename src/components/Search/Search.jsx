import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../useDropdown/useDropdown.jsx";
import Results from "../Results/Results.jsx";
import ThemeContext from "../ThemeContext/ThemeContext.js";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA"); // API Used only supports only Seattle and San fransisco
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
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
      (err) => console.Error(err)
    );
  }, [animal, setBreed, setBreeds]); // dependency array makes sure useEffect is only called when any of these change

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <h3 style={{ textAlign: "center" }}> Search Info </h3>

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
        <button style={{ backgroundColor: theme }}> Submit </button>
        <h3 style={{ textAlign: "center" }}> App Theme </h3>
        <label htmlFor="theme">ButtonColor</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          onBlur={(e) => setTheme(e.target.value)}
        >
          <option value="grey">Grey</option>
          <option value="purple">Purple</option>
          <option value="peru">Peru</option>
          <option value="#ad343e">Red</option>
          <option value="pink">Pink</option>
          <option value="violet">Violet</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="darkblue">Dark Blue</option>
        </select>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default Search;
