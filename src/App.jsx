import "./App.css";
import MusicPlayers from "./components/MusicPlayers/MusicPlayers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./Pages/CardDetails/CardDetails";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<MusicPlayers />} />
          <Route path="/detail/:id" element={<CardDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
