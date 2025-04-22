// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removendo a configuração de exportação estática para usar o modo padrão do Vercel
  // que suporta renderização do lado do servidor (SSR)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configurações para comercialização
  env: {
    NEXT_PUBLIC_APP_NAME: 'FinControl',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
    NEXT_PUBLIC_APP_DESCRIPTION: 'Aplicativo de controle financeiro completo'
  }
}

module.exports = nextConfig
