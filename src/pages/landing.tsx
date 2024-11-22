import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme-toggle';
import { Bot, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold text-xl">AIChat Builder</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => navigate('/sign-in')}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">
            Build AI Chatbots for Your Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Create custom AI chatbots that understand your business and delight your customers.
            No coding required.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/sign-up')}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2 mx-auto"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

const features = [
  {
    title: "Easy to Use",
    description: "Create and customize your chatbot in minutes with our intuitive interface.",
    icon: Bot
  },
  {
    title: "AI-Powered",
    description: "Leverage advanced AI to understand and respond to customer queries naturally.",
    icon: Bot
  },
  {
    title: "24/7 Support",
    description: "Let your chatbot handle customer support around the clock.",
    icon: Bot
  }
];