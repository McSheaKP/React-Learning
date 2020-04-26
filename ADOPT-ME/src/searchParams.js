import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // This is an example of a hook
  //Note: all hooks should begin with the word use e.g. useState in this case
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  //This will occur asyncronously after the render happens in the dom
  //Use effect is functionally scheduled to run after the returned component html is rendered
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    //Writing in the dependencies for the effect will allow you to only re-render
    //when the dependencies in this case change.

    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        //Note this is destructured here name is actually breedObj => breedObj.name
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      (error) => console.error(error)
    );
  }, [animal, setBreed, setBreeds]);
  //basically if any of these things change, rerender
  // else don't rerender

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
