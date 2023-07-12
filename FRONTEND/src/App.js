import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Plans from "./Components/Plans";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Affilate from "./Components/Affilate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Plans" element={<Plans/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Affilate" element={<Affilate/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
