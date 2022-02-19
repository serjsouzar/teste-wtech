import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Empresas  from "./pages/empresas";

export default function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Empresas</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Empresas/>} />
        </Routes>
      </Router>
    </div>
  );
}
