import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //setting initial state to loading so it can fetch data
      loading: true,
    };
  }

  componentDidMount() {
    /** Added Mount life cycle method which fetchs data from Pet API using AJAX request
     * Runs only on Mount
     * Then never runs again
     */
    pet.animal(this.props.id).then(
      ({ animal }) => {
        console.log(animal.breeds);
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      },
      (err) => console.error(err)
    );
  }
  render() {}
}

export default Details;
