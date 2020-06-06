import React from "react";

class Carousel extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.handleIndexClick = this.handleIndexClick.bind();
  //   }

  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    /*
     *   takes props from parent component and
     *   creates a set of props or new state for them
     *   and passes down to the component
     */

    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  /*
   * function for the onClick event Listener
   * Arrow function used to keep the context same as that of class
   * takes data from the data-index of a carousel image and sets it to active
   * on mouse click on a particular image
   **/
  handleIndexClick = (e) => {
    this.setState({
      active: parseInt(e.target.dataset.index, 10),
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="Animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt="Animal Thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
