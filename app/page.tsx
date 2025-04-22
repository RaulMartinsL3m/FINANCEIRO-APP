import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">FinControl</h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Seu aplicativo de controle financeiro completo para Android e iOS
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/conectar-conta"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Conectar Conta Bancária
          </Link>
          <Link 
            href="/dashboard"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Acessar Dashboard
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Conecte suas contas</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Vincule suas contas bancárias e cartões de crédito para visualizar todas as suas finanças em um só lugar.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Analise seus gastos</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Visualize relatórios detalhados e gráficos para entender melhor seus hábitos financeiros.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Planeje seu futuro</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Defina metas financeiras e acompanhe seu progresso para alcançar seus objetivos.
            </p>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Seus dados são protegidos com criptografia de ponta a ponta. Nunca compartilhamos suas informações financeiras.
        </p>
      </div>
    </main>
  );
}
