import React from 'react';
import TournamentForm from '../../components/TournamentForm';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[var(--pastel-blue)] flex items-center justify-center">
      <div className="w-full max-w-xl p-8 bg-[var(--pastel-purple)] rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--foreground)]">Crear Torneo</h1>
        <TournamentForm />
      </div>
    </div>
  );
}
