"use client";

import { useState } from "react";
import { login, logout, useAuthStore } from "@/store/auth.store";

export function useAuth() {
  const auth = useAuthStore();
  const [loading, setLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    try {
      if (!email || !password) {
        throw new Error("Email và mật khẩu là bắt buộc");
      }
      return Promise.resolve(login(email));
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
