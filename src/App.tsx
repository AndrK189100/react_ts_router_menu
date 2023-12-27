import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import HomePage from "./components/HomePage/HomePage";
import DriftPage from "./components/DriftPage/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage/TimeAttakPage";
import ForzaPage from "./components/ForzaPage/ForzaPage";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/*" Component={HomePage} />
            <Route path="/drift" Component={DriftPage} />
            <Route path="/timeattack" Component={TimeAttackPage} />
            <Route path="/forza" Component={ForzaPage} />  
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}
