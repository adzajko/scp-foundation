import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer } from './components/layout/index';
import { Routes } from './routes/Routes';
import { AuthProvider } from './context/index';

function App() {
  return (
    <AuthProvider>
      <Router>
        <section className='hamburger-grid'>
          <header className='main-header'>
            <Navbar />
          </header>
          <main className='app-outlet'>
            <Routes />
          </main>
          <footer className='main-footer'>
            <Footer />
          </footer>
        </section>
      </Router>
    </AuthProvider>
  );
}

export default App;
