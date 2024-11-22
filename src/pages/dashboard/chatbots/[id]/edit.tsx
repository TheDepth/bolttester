import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { ChatbotSettings } from "../../../../components/chatbots/settings";
import { ChatbotTraining } from "../../../../components/chatbots/training";
import { ChatbotAnalytics } from "../../../../components/chatbots/analytics";

export default function EditChatbotPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("settings");

  // Mock data - replace with API call
  const chatbot = {
    id,
    name: "Customer Support Bot",
    description: "24/7 customer support chatbot",
    type: "customer-support",
    status: "active",
    settings: {
      greeting: "Hello! How can I help you today?",
      tone: "professional",
      language: "en",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold">{chatbot.name}</h1>
        <p className="text-muted-foreground mt-1">{chatbot.description}</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-6">
          <ChatbotSettings chatbot={chatbot} />
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <ChatbotTraining chatbot={chatbot} />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <ChatbotAnalytics chatbot={chatbot} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}