import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { SideBar, MainContent } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="w-100 vh-100">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <MainContent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
