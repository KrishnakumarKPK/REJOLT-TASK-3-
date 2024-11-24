import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Bell, Lock, User, Palette, Currency } from 'lucide-react';

const Settings = () => {
  const { isDarkMode } = useTheme();

  const settingsSections = [
    {
      title: 'Account Settings',
      icon: User,
      settings: [
        { name: 'Update Profile', description: 'Change your account information' },
        { name: 'Email Preferences', description: 'Manage your email settings' }
      ]
    },
    {
      title: 'Notification Settings',
      icon: Bell,
      settings: [
        { name: 'Push Notifications', description: 'Configure push notifications' },
        { name: 'Email Alerts', description: 'Set up email alerts for expenses' }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      settings: [
        { name: 'Password', description: 'Change your password' },
        { name: 'Two-Factor Authentication', description: 'Enable 2FA for added security' }
      ]
    },
    {
      title: 'Display Settings',
      icon: Palette,
      settings: [
        { name: 'Theme', description: 'Choose between light and dark mode' },
        { name: 'Currency', description: 'Set your preferred currency' }
      ]
    }
  ];

  return (
    <div className={`max-w-4xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-8">
          {settingsSections.map(({ title, icon: Icon, settings }) => (
            <div key={title} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
              <div className="flex items-center space-x-2 mb-4">
                <Icon className="w-6 h-6 text-indigo-500" />
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>

              <div className="space-y-4">
                {settings.map((setting) => (
                  <div
                    key={setting.name}
                    className={`p-4 rounded-lg ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    } cursor-pointer transition-colors duration-200`}
                  >
                    <h3 className="font-medium mb-1">{setting.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {setting.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;