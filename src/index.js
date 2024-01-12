import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Homepage from "./Homepage";
import AuthorsPage from "./AuthorsPage";
import TopicsPage from "./TopicsPage";
import QuotesList from "./Quotelist";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>Home</Route>
        <Route path="/topic" element={<TopicsPage />}>Topics</Route>
        <Route path="/authors" element={<AuthorsPage />}>Authors</Route>
        <Route path="/quotes" element={<QuotesList />}>Quotes</Route>
      </Routes>
    </BrowserRouter>
);

