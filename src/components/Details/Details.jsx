import React from "react";
import { Link, navigate } from "@reach/router";
import pet from "@frontendmasters/pet";
import Carousel from "../Carousel/Carousel.jsx";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.jsx";
import sadkitty from "./kitty.png"; //tell webpack/parcel this is image file

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
  state = { loading: true, notFound: true };
  componentDidMount() {
    /** Added Mount life cycle method which fetchs data from Pet API using AJAX request
     * Runs only on Mount
     * Then never runs again
     */

    pet.animal(this.props.id).then(({ animal }) => {
      if (!animal) {
        this.setState({ notFound: true, loading: false });
        return;
      }
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
        notFound: false,
      });
    }, console.error);
  }

  componentDidUpdate() {
    if (this.state.notFound) {
      setTimeout(() => navigate("/"), 5000);
    }
  }

  render() {
    if (this.state.loading & this.state.notFound) {
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
    if (!this.state.loading & this.state.notFound) {
      console.log(sadkitty);
      return (
        <div className="details">
          <div>
            <img src={sadkitty} alt="sad-kitty" className="sadkitty" />
            <h2 style={{ color: "#c03440" }}>Details not found.</h2>
            <h2>
              <Link to="/" style={{ color: "#c03440" }}>
                Click here!
              </Link>{" "}
              to go back to home page or wait 5 seconds for redirection.
            </h2>
          </div>
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
      media,
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
          <Carousel media={media} />
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  console.log("here");
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
