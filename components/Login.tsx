import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LogIn } from 'lucide-react';

const Login = () => {
  const { isDarkMode } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={`max-w-md mx-auto ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center justify-center mb-8">
          <LogIn className="w-8 h-8 text-indigo-500" />
          <h2 className="text-2xl font-bold ml-2">Login to SpendSmart</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-500 hover:text-indigo-600">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;