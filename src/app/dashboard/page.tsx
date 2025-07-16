import React from 'react';
import TournamentCard from '../../components/TournamentCard';

const mockTournaments = [
  { id: 1, name: 'Torneo League of Legends', date: '2025-08-01', description: 'Competencia 5v5', spots: 16 },
  { id: 2, name: 'Torneo Valorant', date: '2025-08-05', description: 'Competencia 5v5', spots: 12 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Torneos Disponibles</h1>
        <div className="space-y-6">
          {mockTournaments.map(torneo => (
            <TournamentCard key={torneo.id} torneo={torneo} />
          ))}
        </div>
      </div>
    </div>
  );
}
