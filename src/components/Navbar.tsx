import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[var(--pastel-purple)] text-[var(--foreground)] px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-[var(--pastel-blue)]">Gamer Tournaments</Link>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:text-[var(--pastel-blue)]">Torneos</Link>
          <Link href="/admin" className="hover:text-[var(--pastel-pink)]">Admin</Link>
          <Link href="/login" className="hover:text-[var(--pastel-green)]">Iniciar sesión</Link>
          <Link href="/register" className="hover:text-[var(--pastel-yellow)]">Registro</Link>
        </div>
      </div>
    </nav>
  );
}
