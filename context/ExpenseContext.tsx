import React, { createContext, useContext, useState } from 'react';
import { Expense } from '../types';

interface ExpenseContextType {
  expenses: Expense[];
  totalBudget: number;
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  getSpentAmount: () => number;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const totalBudget = 5000;

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const getSpentAmount = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        totalBudget,
        addExpense,
        getSpentAmount,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};