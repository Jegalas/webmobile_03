// App.js
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavbarComponent from "./Navbar";
import { Container } from "react-bootstrap";
import Contact from "./Contact";
import FlashCards from "./FlashCards"; // Import FlashCards component

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route exact element={<Home />} path="/" />
            {/* Remove the line below */}
            {/* <Route exact element={<Movies />} path="/movies" /> */}
            <Route exact element={<Contact />} path="/contact" />
            <Route exact element={<FlashCards />} path="/flash-cards" />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
