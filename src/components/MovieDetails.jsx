import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import { useParams, useNavigate } from 'react-router-dom'


// a questo punto la rotta dove viene montato questo componente Details è parametrica
// quel parametro è fondamentale per capire QUALE pasta mostrare!
// l'ultimo passaggio sarà RECUPERARE dalla barra degli indirizzi quel parametro e utilizzarlo per
// recuperare i dettagli della pasta corretta all'interno di menu.json (se aveste un'API da contattare
// sarebbe la stessa cosa, utilizzereste quell'id come parte dell'URL)

const MovieDetails = function () {
  // MovieDetails ora recupererà il valore di :pastaId in modo da capire che pasta mostrare

  const [movieObject, setMovieObject] = useState(null)

  const params = useParams()
  console.log('PARAMS', params)
  const navigate = useNavigate()
  // params.pastaId è il valore del parametro :pastaId nell'URL

  // utilizzare params.pastaId per recuperare dal JSON la pasta corretta


const URL = "http://www.omdbapi.com/?apikey=a5c6b837&i=" + params.movieId;
console.log(URL)
console.log(params.movieId)


  const fetchMovie = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dati");
        }
      })

      .then((movie) => {
        console.log("MOVIE", movie);/*  */
        setMovieObject(movie);
        
      
      })

      .catch((error) => {
        console.log("ERRORE", error);
    
      });
  };

useEffect(() => {
    fetchMovie()
}, [])
/* 
  useEffect(() => {
    // qui dentro tiro fuori dal JSON la pasta corretta
    const rightMovieToShow = items.find(
      (movie) => movie.imdbID === parseInt(params.movieId)
    )
    console.log('PASTA TROVATA', rightMovieToShow)
    if (rightPastaToShow) {
      // se il risultato del find NON è undefined, quindi ABBIAMO trovato una pasta, la salvo
      // nello stato di MovieDetails
      setTimeout(() => {
        // così almeno vediamo lo spinner per 1 sec...
        setMovieObject(rightMovieToShow)
      }, 1000)
    } else {
      // nel caso la pasta non fosse stata trovata nel JSON (...presumibilmente perchè l'utente
      // cerca una pasta che non esiste scrivendo a mano nella barra degli indirizzi...)
      navigate('/notfound')
    }
  }, []) */

  return (

 <div>
      {!movieObject && (
        <div className="text-center mt-3">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {movieObject && (
        // questo controllo monta il contenuto solo se pastaObject NON È NULL (ovvero
        // solo dopo che il find ha trovato la pasta da mostrare)
        // altrimenti la pagina crasherebbe! cercherebbe di leggere name, image e description da null...
        <div className="mt-3 d-flex flex-column justify-content-center">
          <h2 className="text-center">Details of {movieObject.Title}</h2>
          <Card id="cardStyle" className="d-flex justify-content-center flex-column">
            <Card.Img src={movieObject.Poster} alt="movie poster" id="cardPoster"/>
            <Card.Body className="text-center">
              <Card.Title>{movieObject.Title}</Card.Title>
              <Card.Text>{movieObject.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div> 
  )
      }

export default MovieDetails