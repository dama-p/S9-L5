import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const URL = "http://www.omdbapi.com/?apikey=a5c6b837&s=";
class MovieGallery extends Component {
  state = {
    moviesArray: [],
    isLoading: true,
    isError: false,
  };

  fetchPosters = () => {
    fetch(URL + this.props.seriesToSearch, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dati");
        }
      })

      .then((series) => {
        console.log("SERIES", series);
        this.setState({
          moviesArray: series.Search,
          isLoading: false,
        });
      })

      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchPosters();
  }

  render() {
    return (
      <>
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="secondary" />
          </div>
        )}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger">Something went wrong! Try reloading</Alert>
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-3 mb-4 gx-2">
          {this.state.moviesArray.map((movie, index) => {
            if (index < 6) {
              return (
                <div className="col-6 col-md-4 col-lg-2 mb-2 text-center px-1" key={movie.imdbID}>
                  <div className="posterContainer">
                    <img src={movie.Poster} className="img-fluid" alt="movie poster"></img>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}

export default MovieGallery;
