import Home from "./Components/Home";
import Nav from "./Components/Nav";
import AnimeState from "./Context/AnimeState";
import AllAnime from "./Components/AllAnime";
import Popular from "./Components/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
        <AnimeState>
      <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home></Home>} /> 
            <Route exact path="/All" element={<AllAnime></AllAnime>} /> 
            <Route exact path="/POPULAR" element={<Popular></Popular>} /> 
          </Routes>
      </Router>
        </AnimeState>
    </>
  );
}

export default App;
