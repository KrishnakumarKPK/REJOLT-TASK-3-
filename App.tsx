import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ExpenseProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </ExpenseProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;