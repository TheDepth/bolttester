import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTheme } from "../theme-provider";

interface ChatbotAnalyticsProps {
  chatbot: any;
}

// Mock data
const conversationData = [
  { date: "2024-03-01", conversations: 45 },
  { date: "2024-03-02", conversations: 52 },
  { date: "2024-03-03", conversations: 38 },
  { date: "2024-03-04", conversations: 65 },
  { date: "2024-03-05", conversations: 48 },
  { date: "2024-03-06", conversations: 57 },
  { date: "2024-03-07", conversations: 43 },
];

const satisfactionData = [
  { date: "2024-03-01", satisfaction: 4.5 },
  { date: "2024-03-02", satisfaction: 4.2 },
  { date: "2024-03-03", satisfaction: 4.8 },
  { date: "2024-03-04", satisfaction: 4.3 },
  { date: "2024-03-05", satisfaction: 4.6 },
  { date: "2024-03-06", satisfaction: 4.4 },
  { date: "2024-03-07", satisfaction: 4.7 },
];

export function ChatbotAnalytics({ chatbot }: ChatbotAnalyticsProps) {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState("7d");

  const stats = [
    {
      title: "Total Conversations",
      value: "348",
      description: "+12% from last week",
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      description: "-0.3s from last week",
    },
    {
      title: "User Satisfaction",
      value: "4.5/5",
      description: "+0.2 from last week",
    },
    {
      title: "Resolution Rate",
      value: "89%",
      description: "+3% from last week",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Analytics Overview</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="conversations"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="satisfaction"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}