import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainContainer />
      <FooterComponent />
    </div>
  );
}

export default App;
