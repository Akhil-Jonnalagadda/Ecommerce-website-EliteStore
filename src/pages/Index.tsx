// This page redirects to the main home component
import { Navigate } from "react-router-dom";

const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
