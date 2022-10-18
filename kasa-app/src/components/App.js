import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Accomodation from "./Accomodation";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/a-propos" element={<About/>}/>
      <Route path="/fiche-logement/:id" element={<Accomodation />}/>
    </Routes>
    <Footer />
  </div>
);

export default App;
