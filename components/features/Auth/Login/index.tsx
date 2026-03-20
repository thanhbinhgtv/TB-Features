"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, userEmail, loading, login, logout } = useAuth();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    try {
      await login(email, password);
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Đăng nhập thất bại";
      setError(message);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto w-full max-w-md px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-800">
            Về trang chủ
          </Link>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-zinc-200 bg-white p-5">
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mb-4 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            placeholder="you@example.com"
          />

          <label className="mb-2 block text-sm font-medium">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mb-4 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            placeholder="••••••••"
          />

          {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
          >
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>

        <div className="mt-4 text-sm text-zinc-700">
          <p>Trạng thái: {isAuthenticated ? "Đã đăng nhập" : "Chưa đăng nhập"}</p>
          {isAuthenticated && userEmail ? <p>Email: {userEmail}</p> : null}
          {isAuthenticated ? (
            <button onClick={logout} className="mt-3 rounded-lg border border-zinc-300 px-3 py-1">
              Đăng xuất
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default LoginPage
