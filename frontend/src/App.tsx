import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Budgeting from "./pages/Budgeting";
import Investing from "./pages/Investing";
import Saving from "./pages/Saving";
import Dashboard from "./pages/Dashboard";
import Fraud from "./pages/FraudPrevention";
import ProtectedRoute from "./lib/protected-routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/budgeting/*"
            element={
              <ProtectedRoute>
                <Budgeting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investing/*"
            element={
              <ProtectedRoute>
                <Investing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saving/*"
            element={
              <ProtectedRoute>
                <Saving />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fraud-prevention"
            element={
              <ProtectedRoute>
                <Fraud />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
