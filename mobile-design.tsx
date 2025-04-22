'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Componente para a versão mobile da página inicial
export default function MobileHomePage() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Barra de navegação superior */}
      <header className="sticky top-0 z-10 bg-blue-600 text-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">FinControl</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-blue-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      
      {/* Conteúdo principal */}
      <main className="p-4">
        {/* Banner principal */}
        <div className="mb-6 p-5 bg-blue-500 text-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Bem-vindo ao FinControl</h2>
          <p className="mb-4">Seu aplicativo de controle financeiro completo para Android e iOS</p>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg shadow">
              Conectar Conta Bancária
            </button>
            <button className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg shadow">
              Acessar Dashboard
            </button>
          </div>
        </div>
        
        {/* Cards de recursos */}
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 dark:text-blue-300 text-xl">🏦</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Conecte suas contas</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Vincule suas contas bancárias e cartões de crédito para visualizar todas as suas finanças em um só lugar.
            </p>
          </div>
          
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 dark:text-blue-300 text-xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Analise seus gastos</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visualize relatórios detalhados e gráficos para entender melhor seus hábitos financeiros.
            </p>
          </div>
          
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 dark:text-blue-300 text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Planeje seu futuro</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Defina metas financeiras e acompanhe seu progresso para alcançar seus objetivos.
            </p>
          </div>
        </div>
        
        {/* Seção de segurança */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Segurança em primeiro lugar</h3>
          <p className="text-sm text-blue-600 dark:text-blue-200">
            Seus dados são protegidos com criptografia de ponta a ponta. Nunca compartilhamos suas informações financeiras.
          </p>
        </div>
      </main>
      
      {/* Barra de navegação inferior */}
      <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex justify-around p-3">
          <button className="flex flex-col items-center">
            <span className="text-xl">🏠</span>
            <span className="text-xs mt-1">Início</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-xl">📈</span>
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-xl">💰</span>
            <span className="text-xs mt-1">Transações</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-xl">👤</span>
            <span className="text-xs mt-1">Perfil</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
