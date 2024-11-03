import React from 'react';
import { Brain } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Каустика</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Главная
            </a>
            <a 
              href="/"
              className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              aria-current="page"
            >
              Практика
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Теория
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              О проекте
            </a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu - hidden by default */}
        <div className="hidden md:hidden mt-4 pb-3 border-t border-gray-200">
          <div className="space-y-1 pt-2 px-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Главная
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
              aria-current="page"
            >
              Практика
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Теория
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              О проекте
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;