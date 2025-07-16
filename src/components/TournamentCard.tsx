import React from 'react';

type Tournament = {
  id: number;
  name: string;
  date: string;
  description: string;
  spots: number;
};

export default function TournamentCard({ torneo }: { torneo: Tournament }) {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-bold">{torneo.name}</h2>
        <p className="text-gray-600">{torneo.description}</p>
        <p className="text-sm text-gray-400">Fecha: {torneo.date}</p>
        <p className="text-sm text-gray-400">Cupos: {torneo.spots}</p>
      </div>
      <button className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Inscribirse</button>
    </div>
  );
}
