import React from 'react';
import { PieChart as PieChartIcon, Activity } from 'lucide-react';
import { useExpense } from '../context/ExpenseContext';
import { useTheme } from '../context/ThemeContext';
import { FaRupeeSign } from "react-icons/fa";
import ExpenseList from './ExpenseList';
import DashboardCard from './DashboardCard';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const Dashboard = () => {
  const { expenses, totalBudget, getSpentAmount } = useExpense();
  const { isDarkMode } = useTheme();
  const spentAmount = getSpentAmount();
  const remainingAmount = totalBudget - spentAmount;

  const cards = [
    {
      title: 'Total Budget',
      amount: totalBudget,
      icon: FaRupeeSign,
      color: 'bg-green-500',
    },
    {
      title: 'Spent',
      amount: spentAmount,
      icon: Activity,
      color: 'bg-blue-500',
    },
    {
      title: 'Remaining',
      amount: remainingAmount,
      icon: PieChartIcon,
      color: 'bg-purple-500',
    },
  ];

  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value,
  }));

  const monthlyData = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const barData = Object.entries(monthlyData).map(([month, amount]) => ({
    month,
    amount,
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-xl font-bold mb-4">Expense Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-xl font-bold mb-4">Monthly Expenses</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Recent Expenses</h2>
        <ExpenseList expenses={expenses.slice(0, 5)} />
      </div>
    </div>
  );
};

export default Dashboard;
