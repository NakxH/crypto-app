import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { HorizontalScroller } from "./components/HorizontalScroller/HorizontalScroller";
import { Menubar } from "./components/Menubar";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Menubar />
      </Router>
    </React.Fragment>
  );
}