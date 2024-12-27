import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Budgeting from "./pages/Budgeting";
import Investing from "./pages/Investing";
import Saving from "./pages/Saving";
import Dashboard from "./pages/Dashboard";
import Fraud from "./pages/FraudPrevention"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/budgeting/*" element={<Budgeting />} />
          <Route path="/investing/*" element={<Investing />} />
          <Route path="/saving/*" element={<Saving />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/fraud-prevention" element={<Fraud/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;