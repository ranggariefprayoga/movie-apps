/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePages";
import DetailPage from "./pages/DetailPage";
import "./App.css";
import api from "./utils/api";
console.log(api.getDetailRestaurant("rqdv5juczeskfw1e867"));

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
