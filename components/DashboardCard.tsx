import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DashboardCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  amount,
  icon: Icon,
  color,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`rounded-lg p-6 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-semibold mt-1">
            ${amount.toLocaleString()}
          </p>
        </div>
        <div className={`${color} p-3 rounded-full`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;