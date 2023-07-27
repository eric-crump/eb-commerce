import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from  "./Home";
import Page from "./components/LandingPage/Page";
import ProductOverview from "./components/ProductOverview";

function App() {
  return (
    <HashRouter>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/page/:title" element={<Page />} />
        <Route exact path="/pdp/:productId" element={<ProductOverview />} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;
