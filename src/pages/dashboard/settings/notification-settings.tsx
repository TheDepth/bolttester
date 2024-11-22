import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Switch } from "../../../components/ui/switch";
import { toast } from "sonner";

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
    security: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Notification preferences updated");
    } catch (error) {
      toast.error("Failed to update preferences");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications about your chatbot activity
            </p>
          </div>
          <Switch
            id="email-notifications"
            checked={notifications.email}
            onCheckedChange={(checked) => 
              setNotifications(prev => ({ ...prev, email: checked }))
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications about your chatbot activity
            </p>
          </div>
          <Switch
            id="push-notifications"
            checked={notifications.push}
            onCheckedChange={(checked) => 
              setNotifications(prev => ({ ...prev, push: checked }))
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing">Marketing Updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about new features and promotions
            </p>
          </div>
          <Switch
            id="marketing"
            checked={notifications.marketing}
            onCheckedChange={(checked) => 
              setNotifications(prev => ({ ...prev, marketing: checked }))
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="security">Security Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Receive alerts about security updates and unusual activity
            </p>
          </div>
          <Switch
            id="security"
            checked={notifications.security}
            onCheckedChange={(checked) => 
              setNotifications(prev => ({ ...prev, security: checked }))
            }
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Preferences"}
      </Button>
    </form>
  );
}