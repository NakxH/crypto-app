import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Menubar } from "./components/Menubar";
import { Categories } from "./pages/Categories/Categories";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage/MenuPage";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
        <Menubar />
      </Router>
    </React.Fragment>
  );
}