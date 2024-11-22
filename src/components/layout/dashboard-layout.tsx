import { useUser } from "@clerk/clerk-react";
import { Sidebar } from "./sidebar";
import { TopNav } from "./top-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar isAdmin={isAdmin} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}