import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AuthModal from './components/AuthModal.jsx';
import Home from './pages/Home.jsx';
import Adopt from './pages/Adopt.jsx';
import Quiz from './pages/Quiz.jsx';
import { Release, Apply, Contact } from './pages/Forms.jsx';
import { About, Mission, Tips, Stories } from './pages/Info.jsx';

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <main key={pathname} className="page wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/release" element={<Release />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}
