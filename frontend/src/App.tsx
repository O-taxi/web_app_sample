import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function ThemedLayout() {
  const { theme } = useTheme();
  return (
    <div className={`d-flex flex-column min-vh-100 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ThemedLayout />
      </ThemeProvider>
    </Router>
  );
};

export default App;