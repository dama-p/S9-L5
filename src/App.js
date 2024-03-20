import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MainContainer from "./components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
