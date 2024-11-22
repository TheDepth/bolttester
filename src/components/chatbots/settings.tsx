import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { toast } from "sonner";

interface ChatbotSettingsProps {
  chatbot: any;
}

export function ChatbotSettings({ chatbot }: ChatbotSettingsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    name: chatbot.name,
    description: chatbot.description,
    greeting: chatbot.settings.greeting,
    tone: chatbot.settings.tone,
    language: chatbot.settings.language,
    active: chatbot.status === "active",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Settings saved successfully");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={settings.name}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={settings.description}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="greeting">Greeting Message</Label>
          <Input
            id="greeting"
            value={settings.greeting}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, greeting: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tone">Conversation Tone</Label>
          <Select
            value={settings.tone}
            onValueChange={(value) =>
              setSettings((prev) => ({ ...prev, tone: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select
            value={settings.language}
            onValueChange={(value) =>
              setSettings((prev) => ({ ...prev, language: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="active">Active Status</Label>
            <p className="text-sm text-muted-foreground">
              Enable or disable this chatbot
            </p>
          </div>
          <Switch
            id="active"
            checked={settings.active}
            onCheckedChange={(checked) =>
              setSettings((prev) => ({ ...prev, active: checked }))
            }
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}