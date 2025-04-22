'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-blue-600 hover:text-white';
  };
  
  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                FinControl
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link href="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/dashboard')}`}>
                Dashboard
              </Link>
              <Link href="/transacoes" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/transacoes')}`}>
                Transações
              </Link>
              <Link href="/relatorios" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/relatorios')}`}>
                Relatórios
              </Link>
              <Link href="/conectar-conta" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/conectar-conta')}`}>
                Conectar Conta
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:ml-6">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-blue-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Abrir menu do usuário</span>
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    U
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/dashboard" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/dashboard')}`}>
              Dashboard
            </Link>
            <Link href="/transacoes" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/transacoes')}`}>
              Transações
            </Link>
            <Link href="/relatorios" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/relatorios')}`}>
              Relatórios
            </Link>
            <Link href="/conectar-conta" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/conectar-conta')}`}>
              Conectar Conta
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  U
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Usuário</div>
                <div className="text-sm font-medium text-gray-300">usuario@exemplo.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/perfil" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                Seu Perfil
              </Link>
              <Link href="/configuracoes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                Configurações
              </Link>
              <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
