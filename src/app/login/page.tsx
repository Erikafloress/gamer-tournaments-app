import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Correo electrónico" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
          <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
          <button type="submit" className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Entrar</button>
        </form>
        <p className="text-sm text-center">¿No tienes cuenta? <a href="/register" className="text-blue-600 hover:underline">Regístrate</a></p>
      </div>
    </div>
  );
}
