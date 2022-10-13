import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About/>}/>
      <Route />
    </Routes>
    <Footer />
  </div>
);

export default App;
