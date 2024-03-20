import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MainContainer from "./components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/TvShows" element={<TVShows />}></Route>
          <Route path="/details/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
