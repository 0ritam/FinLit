import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { baseBackendUrl } from "../../shared/url";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");

  const RegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const fetchData = await fetch(`${baseBackendUrl}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  //conetent type header
      },
      body:JSON.stringify({
        fullname,
        email,
        password
      }),
    })

    const data = await fetchData.json();
    if(data.token){
      localStorage.setItem('token', data.token)
      navigate('/dashboard')

    }else{
      alert(data.msg)
    }
    console.log(data);
  };


  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-n-1 glass-panel p-8 rounded-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="text-xl font-semibold">Finlit</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Create an account</h1>
          <p className="text-neutral-600">Please enter your details to sign up</p>
        </div>

        <form onSubmit={(e) => RegisterUser(e)} className="space-y-4 text-n-1">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
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