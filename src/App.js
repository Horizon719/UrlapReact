import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Layout.js";
import Kezdolap from "./pages/Kezdolap";
import Adatok from "./pages/Adatok";
import NoPage from "./pages/NoPage";
import Urlap from "./pages/Urlap";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="urlap" element={<Urlap />} />
          <Route path="adatok" element={<Adatok />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
