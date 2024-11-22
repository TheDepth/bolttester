import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from './components/theme-provider';
import { AppRoutes } from './routes';
import { motion, AnimatePresence } from 'framer-motion';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <Router>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <AppRoutes />
            </motion.div>
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;