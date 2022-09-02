import Home from "./Components/Home";
import AnimeState from "./Context/AnimeState";

function App() {
  return (
    <>
      <AnimeState>
        <Home></Home>
      </AnimeState>
    </>
  );
}

export default App;
