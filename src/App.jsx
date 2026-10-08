import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

const Placeholder = ({ title }) => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="font-display text-4xl font-bold text-ink-900">{title}</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Placeholder title="Menu" />} />
        <Route path="/reservation" element={<Placeholder title="Reservation" />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
}