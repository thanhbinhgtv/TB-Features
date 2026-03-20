"use client";

import { useState } from "react";
import { loginWithEmail } from "@/services/auth.service";
import { login, logout, useAuthStore } from "@/store/auth.store";

export function useAuth() {
  const auth = useAuthStore();
  const [loading, setLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    try {
      const result = await loginWithEmail({ email, password });
      login(result.email);
    } finally {
      setLoading(false);
    }
  }

  return {
    ...auth,
    loading,
    login: handleLogin,
    logout,
  };
}
