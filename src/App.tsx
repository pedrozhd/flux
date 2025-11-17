import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Roadmap } from './pages/Roadmap';
import './index.css';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageFromPath = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/faq') return 'faq';
    if (path === '/contact') return 'contact';
    if (path === '/login') return 'login';
    if (path === '/roadmap') return 'roadmap';
    return 'home';
  };

  const handleNavigate = (page: string) => {
    const pathMap: { [key: string]: string } = {
      home: '/',
      about: '/about',
      faq: '/faq',
      contact: '/contact',
      login: '/login',
      roadmap: '/roadmap'
    };
    navigate(pathMap[page] || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPage = getPageFromPath();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLoginSuccess={() => handleNavigate('home')} />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
