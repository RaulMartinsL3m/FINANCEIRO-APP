'use client';

import Header from '@/components/Header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="py-4">
        {children}
      </div>
    </div>
  )
}
