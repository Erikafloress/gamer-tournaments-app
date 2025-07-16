"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.");
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--pastel-blue)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--pastel-yellow)] rounded shadow">
        <h1 className="text-2xl font-bold text-center">Registro de Usuario</h1>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
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
            Registrarse
          </button>
        </form>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
        <p className="text-sm text-center">
          ¿Ya tienes cuenta? <a href="/login" className="text-[var(--pastel-blue)] hover:underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
