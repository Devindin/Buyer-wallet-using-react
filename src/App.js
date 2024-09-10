import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Wallet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
