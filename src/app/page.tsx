import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] px-4 py-12">
      <div className="bg-[var(--pastel-purple)] rounded shadow p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a Gamer Tournaments</h1>
        <p className="mb-6 text-gray-700">
          ¡Organiza y participa en torneos de tus juegos favoritos!<br />
          Regístrate, inicia sesión, explora torneos y compite con otros gamers.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/register" className="w-full py-2 px-4 bg-[var(--pastel-blue)] text-[var(--foreground)] rounded hover:bg-[var(--pastel-green)] font-semibold transition-colors">Registro</Link>
          <Link href="/login" className="w-full py-2 px-4 bg-[var(--pastel-pink)] text-[var(--foreground)] rounded hover:bg-[var(--pastel-yellow)] font-semibold transition-colors">Iniciar sesión</Link>
          <Link href="/dashboard" className="w-full py-2 px-4 bg-[var(--pastel-green)] text-[var(--foreground)] rounded hover:bg-[var(--pastel-blue)] font-semibold transition-colors">Ver Torneos</Link>
        </div>
      </div>
    </main>
  );
}
