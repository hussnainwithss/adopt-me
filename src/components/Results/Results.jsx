import React from "react";
import Pet from "../Pet/Pet.jsx";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1 style={{ textAlign: "center" }}>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
