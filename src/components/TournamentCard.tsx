import React from 'react';

type Tournament = {
  id: string;
  name: string;
  date: string;
  description: string;
  spots: number;
};

type TournamentCardProps = {
  torneo: Tournament;
  inscrito?: boolean;
  onRegister?: () => void;
};

export default function TournamentCard({ torneo, inscrito = false, onRegister }: TournamentCardProps) {
  return (
    <div className="bg-[var(--pastel-yellow)] rounded shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between text-[var(--foreground)]">
      <div>
        <h2 className="text-xl font-bold text-[var(--foreground)]">{torneo.name}</h2>
        <p className="text-gray-600">{torneo.description}</p>
        <p className="text-sm text-gray-400">Fecha: {torneo.date}</p>
        <p className="text-sm text-gray-400">Cupos: {torneo.spots}</p>
      </div>
      {inscrito ? (
        <span className="mt-4 md:mt-0 px-4 py-2 bg-[var(--pastel-purple)] text-[var(--foreground)] rounded">Ya inscrito</span>
      ) : (
        <button
          className="mt-4 md:mt-0 px-4 py-2 bg-[var(--pastel-blue)] text-[var(--foreground)] rounded hover:bg-[var(--pastel-green)] transition-colors"
          onClick={onRegister}
        >
          Inscribirse
        </button>
      )}
    </div>
  );
}
