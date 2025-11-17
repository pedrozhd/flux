import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Roadmap } from './pages/Roadmap';
import './index.css';

type Page = 'home' | 'about' | 'faq' | 'contact' | 'login' | 'roadmap';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login onLoginSuccess={() => handleNavigate('home')} />;
      case 'roadmap':
        return <Roadmap />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
