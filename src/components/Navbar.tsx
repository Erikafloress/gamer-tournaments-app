import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-blue-300">Gamer Tournaments</Link>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:text-blue-300">Torneos</Link>
          <Link href="/admin" className="hover:text-blue-300">Admin</Link>
          <Link href="/login" className="hover:text-blue-300">Iniciar sesión</Link>
          <Link href="/register" className="hover:text-blue-300">Registro</Link>
        </div>
      </div>
    </nav>
  );
}
