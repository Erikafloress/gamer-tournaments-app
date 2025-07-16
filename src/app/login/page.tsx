"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--pastel-blue)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--pastel-yellow)] rounded shadow">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <button type="submit" className="w-full py-2 font-semibold text-[var(--foreground)] bg-[var(--pastel-pink)] rounded hover:bg-[var(--pastel-purple)] transition-colors">
            Entrar
          </button>
        </form>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <p className="text-sm text-center">
          ¿No tienes cuenta? <a href="/register" className="text-[var(--pastel-blue)] hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
