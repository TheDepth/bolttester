import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import Settings from './pages/dashboard/settings';
import UserManagement from './pages/dashboard/users';
import ChatbotsPage from './pages/dashboard/chatbots';
import EditChatbotPage from './pages/dashboard/chatbots/[id]/edit';
import { DashboardLayout } from './components/layout/dashboard-layout';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requireAdmin = false }: { 
  children: React.ReactNode;
  requireAdmin?: boolean;
}) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (requireAdmin && user?.publicMetadata?.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
      <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="/dashboard/users" element={<ProtectedRoute requireAdmin={true}><UserManagement /></ProtectedRoute>} />
      <Route path="/dashboard/chatbots" element={<ProtectedRoute><ChatbotsPage /></ProtectedRoute>} />
      <Route path="/dashboard/chatbots/:id/edit" element={<ProtectedRoute><EditChatbotPage /></ProtectedRoute>} />
    </Routes>
  );
}