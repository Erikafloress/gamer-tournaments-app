import React from 'react';

export default function TournamentForm() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Nombre del torneo" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
      <input type="date" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
      <input type="number" placeholder="Cupos disponibles" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" min={2} />
      <textarea placeholder="Descripción" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" rows={3} />
      <button type="submit" className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Crear Torneo</button>
    </form>
  );
}
