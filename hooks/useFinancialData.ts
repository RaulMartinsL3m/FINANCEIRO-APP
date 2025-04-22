'use client';

import { useState, useEffect } from 'react';

interface FinancialData {
  accounts: Account[];
  transactions: Transaction[];
  totalBalance: number;
  monthlyExpenses: number;
  monthlyIncome: number;
}

interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  institution: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  accountId: string;
}

// Hook para gerenciar dados financeiros
export default function useFinancialData() {
  const [data, setData] = useState<FinancialData>({
    accounts: [],
    transactions: [],
    totalBalance: 0,
    monthlyExpenses: 0,
    monthlyIncome: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Função para buscar dados financeiros da API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Em produção, isso seria uma chamada real à API
      const response = await fetch('/api/financial-data');
      
      if (!response.ok) {
        throw new Error('Falha ao buscar dados financeiros');
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('Erro ao buscar dados financeiros:', err);
      setError('Não foi possível carregar seus dados financeiros. Tente novamente mais tarde.');
      
      // Dados de exemplo para desenvolvimento
      setData({
        accounts: [
          { id: '1', name: 'Conta Corrente', type: 'checking', balance: 2500.75, institution: 'Banco do Brasil' },
          { id: '2', name: 'Poupança', type: 'savings', balance: 15000.00, institution: 'Banco do Brasil' },
          { id: '3', name: 'Cartão de Crédito', type: 'credit_card', balance: -1250.30, institution: 'Nubank' }
        ],
        transactions: [
          { id: '101', date: '2025-04-20', description: 'Supermercado Extra', amount: -156.78, category: 'Alimentação', accountId: '1' },
          { id: '102', date: '2025-04-18', description: 'Transferência recebida', amount: 1000.00, category: 'Receita', accountId: '1' },
          { id: '103', date: '2025-04-15', description: 'Netflix', amount: -39.90, category: 'Entretenimento', accountId: '3' },
          { id: '104', date: '2025-04-10', description: 'Salário', amount: 5000.00, category: 'Receita', accountId: '1' },
          { id: '105', date: '2025-04-05', description: 'Aluguel', amount: -1200.00, category: 'Moradia', accountId: '1' }
        ],
        totalBalance: 16250.45,
        monthlyExpenses: 1396.68,
        monthlyIncome: 6000.00
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Função para atualizar os dados após uma nova conexão
  const refreshData = async () => {
    await fetchData();
  };
  
  // Carrega os dados na montagem do componente
  useEffect(() => {
    fetchData();
  }, []);
  
  return {
    data,
    loading,
    error,
    refreshData
  };
}
