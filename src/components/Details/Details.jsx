import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       //setting initial state to loading so it can fetch data
  //       loading: true,
  //     };
  //   }

  /** Shortcut for intializing state and
   * constructor equivalent to above commented code*/
  state = { loading: true };

  componentDidMount() {
    /** Added Mount life cycle method which fetchs data from Pet API using AJAX request
     * Runs only on Mount
     * Then never runs again
     */
    pet.animal(this.props.id).then(
      ({ animal }) => {
        console.log(animal);
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          colors: animal.colors,
          Age: animal.age,
          loading: false,
        });
      },
      (err) => console.error(err)
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          {/* Loading Animation From loading.io */}
          <div className="lds-heart">
            <div></div>
          </div>
          <h2>Loading...</h2>
        </div>
      );
    }
    const {
      animal,
      breed,
      location,
      description,
      name,
      Age,
      colors,
    } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${Age ? Age + " -" : ""}  ${
            colors.primary ? colors.primary + " -" : ""
          }  ${breed} - ${location}`}</h2>
          <button> Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
