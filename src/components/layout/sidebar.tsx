import { Link, useLocation } from "react-router-dom";
import { Bot, Users, Settings, BarChart3, MessageSquare } from "lucide-react";
import { cn } from "../../lib/utils";

interface SidebarProps {
  isAdmin: boolean;
}

export function Sidebar({ isAdmin }: SidebarProps) {
  const location = useLocation();
  
  const links = [
    { href: "/dashboard", icon: BarChart3, label: "Overview" },
    { href: "/dashboard/chatbots", icon: Bot, label: "My Chatbots" },
    { href: "/dashboard/conversations", icon: MessageSquare, label: "Conversations" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    ...(isAdmin ? [{ href: "/dashboard/users", icon: Users, label: "User Management" }] : []),
  ];

  return (
    <aside className="w-64 min-h-screen bg-card border-r">
      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
              location.pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            <link.icon className="h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}