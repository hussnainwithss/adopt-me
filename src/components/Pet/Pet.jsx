import React from "react";
const Pet = ({ name, animal, breed, media, location, id }) => {
  let imgURL = "http://placecorgi.com/300/300";
  if (media.length) {
    imgURL = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={imgURL} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
  // return (
  //   <div>
  //     <h1>{name}</h1>
  //     <h2>{animal}</h2>
  //     <h2>{breed}</h2>
  //   </div>
  // );
  // return React.createElement("div", {}, [
  //   React.createElement("h1", { key: 5 }, name),
  //   React.createElement("h2", { key: 6 }, animal),
  //   React.createElement("h3", { key: 7 }, breed),
  // ]);
};

export default Pet;
