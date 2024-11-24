import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: TrendingUp,
      title: 'Expense Tracking',
      description: 'Track your daily expenses with ease and get detailed insights into your spending patterns.'
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set and manage budgets for different categories to keep your finances on track.'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your financial data is protected with industry-standard security measures.'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interface designed for users of all experience levels.'
    }
  ];

  return (
    <div className={`max-w-4xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h1 className="text-3xl font-bold mb-6">About SpendSmart</h1>
        
        <p className="text-lg mb-8">
          SpendSmart is your personal finance companion, designed to help you take control of your expenses
          and make informed financial decisions. Our platform combines powerful tracking tools with an
          intuitive interface to make expense management effortless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We believe that financial freedom starts with understanding your spending habits. 
            Our mission is to provide you with the tools and insights needed to make better 
            financial decisions and achieve your money management goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;