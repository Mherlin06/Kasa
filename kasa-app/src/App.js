import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Error from "./pages/Error";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route exact path="/fiche-logement/:id" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
