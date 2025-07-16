import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SimularCredito from "./pages/SimularCredito";
import Nosotros from "./pages/Nosotros";
import Prestamos from "./pages/Prestamos";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 container mt-4">
          <Routes>
            <Route path="/" element={<SimularCredito />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/prestamos" element={<Prestamos />} />
            <Route
              path="/preguntas-frecuentes"
              element={<PreguntasFrecuentes />}
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
