import Home from "./Components/Home";
import Nav from "./Components/Nav";
import AnimeState from "./Context/AnimeState";

function App() {
  return (
    <>
      <AnimeState>
        <Nav/>
          <Home></Home>
      </AnimeState>
    </>
  );
}

export default App;
