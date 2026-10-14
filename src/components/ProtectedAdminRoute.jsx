import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const ProtectedAdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsAuthenticated(!!session);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return null; // or loader

  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
};

export default ProtectedAdminRoute;
