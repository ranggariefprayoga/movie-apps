/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePages";
import DetailPage from "./pages/DetailPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
