import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Bot, MessageSquare, Settings, Trash2, ExternalLink } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { CreateChatbotDialog } from "../../../components/chatbots/create-dialog";
import { ChatbotCard } from "../../../components/chatbots/chatbot-card";

// Mock data
const mockChatbots = [
  {
    id: "1",
    name: "Customer Support Bot",
    description: "24/7 customer support chatbot",
    status: "active",
    conversations: 156,
    lastModified: "2024-03-10",
  },
  {
    id: "2",
    name: "Sales Assistant",
    description: "Product recommendations and sales",
    status: "inactive",
    conversations: 89,
    lastModified: "2024-03-09",
  },
];

export default function ChatbotsPage() {
  const [chatbots, setChatbots] = useState(mockChatbots);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Chatbots</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your AI chatbots
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Chatbot
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chatbots.map((chatbot) => (
          <ChatbotCard key={chatbot.id} chatbot={chatbot} />
        ))}
      </div>

      <CreateChatbotDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onSubmit={(data) => {
          setChatbots([
            ...chatbots,
            {
              id: Math.random().toString(),
              ...data,
              status: "active",
              conversations: 0,
              lastModified: new Date().toISOString().split("T")[0],
            },
          ]);
        }}
      />
    </motion.div>
  );
}