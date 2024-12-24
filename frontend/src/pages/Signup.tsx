import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    toast.success("Signup functionality will be implemented soon!");
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="text-xl font-semibold">Lovely</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Create an account</h1>
          <p className="text-neutral-600">Please enter your details to sign up</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          <Button type="submit" className="w-full button-primary">
            Create account
          </Button>
        </form>

        <p className="text-center mt-6 text-sm text-neutral-600">
          Already have an account?{" "}
          <Link to="/login" className="text-accent-purple hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;