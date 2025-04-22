'use client';

import { useState } from 'react';
import Link from 'next/link';
import BelvoWidget from '@/components/BelvoWidget';
import useFinancialData from '@/hooks/useFinancialData';

export default function ConectarContaClient() {
  const [showWidget, setShowWidget] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const { refreshData } = useFinancialData();
  
  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank);
    setShowWidget(true);
  };
  
  const handleWidgetSuccess = async () => {
    // Atualizar os dados financeiros após conexão bem-sucedida
    await refreshData();
    setShowWidget(false);
    // Redirecionar para o dashboard ou mostrar mensagem de sucesso
  };
  
  const handleWidgetExit = () => {
    setShowWidget(false);
    setSelectedBank(null);
  };
  
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Conectar Conta Bancária</h1>
      
      {showWidget ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Conectar {selectedBank}
          </h2>
          <BelvoWidget 
            onSuccess={handleWidgetSuccess} 
            onExit={handleWidgetExit} 
          />
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Escolha seu banco</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Selecione sua instituição financeira para conectar sua conta bancária e cartões de crédito.
            Seus dados são protegidos e criptografados.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Banco do Brasil')}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full mb-2 flex items-center justify-center text-white font-bold">BB</div>
              <span className="text-sm">Banco do Brasil</span>
            </button>
            
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Bradesco')}
            >
              <div className="w-12 h-12 bg-red-600 rounded-full mb-2 flex items-center justify-center text-white font-bold">BS</div>
              <span className="text-sm">Bradesco</span>
            </button>
            
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Itaú')}
            >
              <div className="w-12 h-12 bg-orange-600 rounded-full mb-2 flex items-center justify-center text-white font-bold">IT</div>
              <span className="text-sm">Itaú</span>
            </button>
            
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Nubank')}
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full mb-2 flex items-center justify-center text-white font-bold">NU</div>
              <span className="text-sm">Nubank</span>
            </button>
            
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Caixa')}
            >
              <div className="w-12 h-12 bg-green-600 rounded-full mb-2 flex items-center justify-center text-white font-bold">CA</div>
              <span className="text-sm">Caixa</span>
            </button>
            
            <button 
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors"
              onClick={() => handleBankSelect('Outros')}
            >
              <div className="w-12 h-12 bg-gray-500 rounded-full mb-2 flex items-center justify-center text-white font-bold">+</div>
              <span className="text-sm">Outros</span>
            </button>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Como funciona?</h3>
            <ol className="list-decimal list-inside text-blue-700 dark:text-blue-200 space-y-2">
              <li>Selecione seu banco na lista acima</li>
              <li>Você será redirecionado para o ambiente seguro do seu banco</li>
              <li>Faça login com suas credenciais bancárias</li>
              <li>Autorize o acesso aos seus dados financeiros</li>
              <li>Pronto! Seus dados serão sincronizados automaticamente</li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link 
              href="/"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              Voltar
            </Link>
            <Link 
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
            >
              Continuar para Dashboard
            </Link>
          </div>
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Segurança e Privacidade</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Criptografia de ponta a ponta</h3>
              <p className="text-gray-600 dark:text-gray-300">Seus dados são criptografados em todas as etapas do processo.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Acesso somente leitura</h3>
              <p className="text-gray-600 dark:text-gray-300">Não podemos realizar transações ou modificar suas contas.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Certificação de segurança</h3>
              <p className="text-gray-600 dark:text-gray-300">Utilizamos a API Belvo, certificada pelo Banco Central do Brasil.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
