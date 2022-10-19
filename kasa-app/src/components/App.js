import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Accomodation from "./Accomodation";
import Error from "./Error";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/fiche-logement/:id" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
