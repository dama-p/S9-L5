import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = function () {
  const [movieObject, setMovieObject] = useState(null);

  const params = useParams();
  console.log("PARAMS", params);
  const navigate = useNavigate();

  const URL = "http://www.omdbapi.com/?apikey=a5c6b837&i=" + params.movieId;
  console.log(URL);
  console.log(params.movieId);

  const fetchMovie = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Issues with data fetching");
        }
      })

      .then((movie) => {
        console.log("MOVIE", movie); /*  */
        setMovieObject(movie);
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      {!movieObject && (
        <div className="text-center mt-3">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {movieObject && (
        <div className="mt-3 d-flex flex-column justify-content-center">
          <h2 className="text-center">Details of {movieObject.Title}</h2>
          <Card id="cardStyle" className="d-flex justify-content-center flex-column">
            <Card.Img src={movieObject.Poster} alt="movie poster" id="cardPoster" />
            <Card.Body className="text-center">
              <Card.Title>{movieObject.Title}</Card.Title>
              <Card.Text>{movieObject.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
