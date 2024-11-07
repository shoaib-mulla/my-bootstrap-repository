import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Phonebook from "./Components/Phonebook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiDataComp from "./Components/ApiDataComp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phonebook" element={<Phonebook />} />
          <Route path="/apidatacomp" element={<ApiDataComp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
