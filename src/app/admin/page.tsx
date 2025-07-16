import React from 'react';
import TournamentForm from '../../components/TournamentForm';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-xl p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Crear Torneo</h1>
        <TournamentForm />
      </div>
    </div>
  );
}
