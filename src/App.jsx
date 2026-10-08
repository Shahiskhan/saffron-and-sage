import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import FeaturedDishes from "./components/sections/FeaturedDishes";

const Placeholder = ({ title }) => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="font-display text-4xl font-bold text-ink-900">{title}</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Layout: Navbar + Content + Footer */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedDishes />
                </>
              }
            />
            <Route path="/menu" element={<Placeholder title="Menu" />} />
            <Route path="/reservation" element={<Placeholder title="Reservation" />} />
            <Route path="/about" element={<Placeholder title="About" />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}