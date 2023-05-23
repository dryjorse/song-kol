import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/mainPage";
import BlogNews from "./pages/blogNews";
import Tours from "./pages/tours";
import Transport from "./pages/transport";
import Reviews from "./pages/reviews";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="blogNews" element={<BlogNews />} />
        <Route path="tours" element={<Tours />} />
        <Route path="transport" element={<Transport />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="FAQ" element={<FAQ />} />
      </Route>
    </Routes>
  );
}
