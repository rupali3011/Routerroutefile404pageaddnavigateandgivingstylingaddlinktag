import "./styles.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page404 from "./Page404";

export default function App() {
  return (
    <div className="App">
      <h3>app page</h3>
      <h5>In route path define slash home page bydefault</h5>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/*<Route path="/*" element={<Navigate to="/"/>} used to direct navigate to home page*/}
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
