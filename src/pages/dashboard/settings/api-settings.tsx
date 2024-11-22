import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Copy, Eye, EyeOff, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export function ApiSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [apiKey, setApiKey] = useState("sk_test_1234567890abcdef");

  const handleRegenerateKey = async () => {
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApiKey("sk_test_" + Math.random().toString(36).substring(2));
      toast.success("API key regenerated successfully");
    } catch (error) {
      toast.error("Failed to regenerate API key");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success("API key copied to clipboard");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>API Key</Label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input
                type={showKey ? "text" : "password"}
                value={apiKey}
                readOnly
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleCopyKey}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleRegenerateKey}
              disabled={isLoading}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-4 space-y-4">
          <h4 className="font-medium">Usage Guidelines</h4>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Keep your API key secure and never share it publicly</li>
            <li>Regenerate your key immediately if you suspect it's compromised</li>
            <li>Use environment variables to store your API key in applications</li>
            <li>Rate limits: 100 requests per minute</li>
          </ul>
        </div>
      </div>
    </div>
  );
}