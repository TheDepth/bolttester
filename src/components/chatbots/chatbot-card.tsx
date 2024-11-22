import { Bot, MessageSquare, Settings, Trash2, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ChatbotCardProps {
  chatbot: {
    id: string;
    name: string;
    description: string;
    status: string;
    conversations: number;
    lastModified: string;
  };
}

export function ChatbotCard({ chatbot }: ChatbotCardProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this chatbot?")) {
      toast.success("Chatbot deleted successfully");
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">{chatbot.name}</h3>
          </div>
          <Badge variant={chatbot.status === "active" ? "success" : "secondary"}>
            {chatbot.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{chatbot.description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{chatbot.conversations} conversations</span>
          </div>
          <div className="text-muted-foreground">
            Updated {chatbot.lastModified}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(\`/dashboard/chatbots/\${chatbot.id}/edit\`)}
        >
          <Settings className="h-4 w-4 mr-1" />
          Configure
        </Button>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(\`/chat/\${chatbot.id}\`, "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}