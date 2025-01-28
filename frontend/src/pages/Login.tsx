import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { baseBackendUrl } from "../../shared/url";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e: React.FormEvent) => {
    e.preventDefault(); //prevent page relaod
    const response = await fetch(`${baseBackendUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      }) 
    })

    const data = await response.json()
    console.log(data)

    if(data.token){
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    } else {
      alert(data.msg)
    }
  }

  return (
    <div className="min-h-screen bg-n-1  flex items-center justify-center p-4">
      <div className="max-w-md  bg-n-1 w-full glass-panel p-8 rounded-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-n-1 rounded-full"></div>
            <span className="text-xl font-semibold">Finlit</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-neutral-600">Please enter your details to sign in</p>
        </div>

        <form onSubmit={(e) => LoginUser(e)} className="space-y-4 text-n-1">
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
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full button-primary">
            Sign in
          </Button>
        </form>

        <p className="text-center mt-6 text-sm text-neutral-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent-purple hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;