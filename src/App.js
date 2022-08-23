import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
