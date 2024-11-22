import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { ProfileSettings } from "./profile-settings";
import { NotificationSettings } from "./notification-settings";
import { ApiSettings } from "./api-settings";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <ApiSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}