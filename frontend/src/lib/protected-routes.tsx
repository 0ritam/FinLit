import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  // Wait for Clerk to load before rendering
  if (!isLoaded) return null;

  // Redirect to sign-in if the user is NOT authenticated
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};

export default ProtectedRoute;

