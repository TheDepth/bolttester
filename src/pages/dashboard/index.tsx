import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "../../components/theme-provider";
import { Bot, MessageSquare, Users } from "lucide-react";

const data = [
  { name: "Mon", conversations: 40 },
  { name: "Tue", conversations: 30 },
  { name: "Wed", conversations: 60 },
  { name: "Thu", conversations: 45 },
  { name: "Fri", conversations: 70 },
  { name: "Sat", conversations: 35 },
  { name: "Sun", conversations: 25 },
];

const stats = [
  { label: "Active Chatbots", value: "3", icon: Bot },
  { label: "Total Conversations", value: "305", icon: MessageSquare },
  { label: "Active Users", value: "1.2k", icon: Users },
];

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-card rounded-xl border"
          >
            <div className="flex items-center space-x-4">
              <stat.icon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-card rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">Weekly Conversations</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
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
      </div>
    </motion.div>
  );
}