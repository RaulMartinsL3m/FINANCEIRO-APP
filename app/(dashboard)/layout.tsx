import AppLayout from '@/components/AppLayout';
import { AuthProvider } from '@/hooks/useAuth';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AppLayout>
        {children}
      </AppLayout>
    </AuthProvider>
  )
}
