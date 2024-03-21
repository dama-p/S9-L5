import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = function () {
  const [movieObject, setMovieObject] = useState(null);
  const [commentsArray, setCommentsArray] = useState([]);

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
        console.log("ERROR", error);
      });
  };

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
      method: "GET",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTdjNTRjNTllYzAwMTk5MGQ3M2IiLCJpYXQiOjE3MTA3NzIxOTcsImV4cCI6MTcxMTk4MTc5N30.kCohxILxrs-RND89SG7g6s5nmtlkExQuYG7vQHss1nM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Issues with data fetching");
        }
      })
      .then((comments) => {
        console.log("COMMENTS ARRAY", comments);
        console.log(comments[0].comment);
        setCommentsArray(comments);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    fetchMovie();
    fetchComments();
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

      {!commentsArray && (
        <div className="text-center mt-3">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}

      {commentsArray.length != 0 && (
        <>
          <p className="commentsTitle">Comments</p>
          <ListGroup>
            {commentsArray.map((comment) => {
              return (
                <ListGroup.Item id="commentsList" key={comment._id}>
                  {comment.comment}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </>
      )}

      {commentsArray.length === 0 && <p className="commentsTitle text-center m-0">No comments for this movie yet!</p>}
    </div>
  );
};

export default MovieDetails;
