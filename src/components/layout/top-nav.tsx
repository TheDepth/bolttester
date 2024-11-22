import { UserButton } from "@clerk/clerk-react";
import { Bot } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export function TopNav() {
  return (
    <header className="h-16 border-b bg-card">
      <div className="h-full container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold text-xl">AIChat Builder</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}