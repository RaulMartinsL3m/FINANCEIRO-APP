'use client';

import { useEffect, useRef } from 'react';

interface BelvoWidgetProps {
  onSuccess: () => void;
  onExit: () => void;
}

export default function BelvoWidget({ onSuccess, onExit }: BelvoWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Carrega o script do Belvo
    const script = document.createElement('script');
    script.src = 'https://cdn.belvo.io/belvo-widget-1-stable.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Inicializa o widget quando o script estiver carregado
    script.onload = () => {
      if (!containerRef.current) return;
      
      // @ts-ignore - O Belvo Widget é carregado globalmente
      const { createWidget } = window.belvoSDK;
      
      // Cria o widget com as configurações
      const widget = createWidget({
        // Substitua por suas credenciais reais em produção
        environment: 'sandbox',
        accessToken: process.env.NEXT_PUBLIC_BELVO_ACCESS_TOKEN || 'seu-token-de-acesso',
        
        // Callbacks
        onSuccess: (link: any, institution: any) => {
          console.log('Link criado com sucesso:', link, institution);
          onSuccess();
        },
        onExit: (data: any) => {
          console.log('Widget fechado:', data);
          onExit();
        },
        onError: (error: any) => {
          console.error('Erro no widget:', error);
        },
        
        // Configurações de localização e aparência
        locale: 'pt',
        country: 'BR',
        branding: {
          primaryColor: '#3B82F6',
          companyName: 'FinControl',
          companyLogo: '/logo.png',
          primaryTextColor: '#FFFFFF',
        },
      });
      
      // Monta o widget no container
      widget.mount(containerRef.current);
      
      // Limpa o widget quando o componente for desmontado
      return () => {
        widget.unmount();
        document.body.removeChild(script);
      };
    };
  }, [onSuccess, onExit]);
  
  return (
    <div 
      ref={containerRef} 
      className="belvo-widget-container min-h-[500px] w-full bg-gray-50 dark:bg-gray-700 rounded-lg"
    >
      <div className="flex items-center justify-center h-full p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    </div>
  );
}
