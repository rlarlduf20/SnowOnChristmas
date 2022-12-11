import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./components/history";
import Main from "./components/main";
import Predict from "./components/predict";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
