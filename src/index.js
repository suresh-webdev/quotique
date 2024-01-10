import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from "./Navbar";
import Homepage from "./Homepage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>Home</Route>
      </Routes>
    </BrowserRouter>
);

