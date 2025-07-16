"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TournamentForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [spots, setSpots] = useState(2);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Debes iniciar sesión para crear un torneo.");
      setLoading(false);
      return;
    }
    const { error } = await supabase.from("tournaments").insert({
      name,
      date,
      spots,
      description,
      created_by: user.id,
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("¡Torneo creado exitosamente!");
      setName("");
      setDate("");
      setSpots(2);
      setDescription("");
    }
    setLoading(false);
  };

  return (
    <form className="space-y-4 bg-[var(--pastel-yellow)] p-6 rounded shadow text-[var(--foreground)]" onSubmit={handleCreate}>
      <input
        type="text"
        placeholder="Nombre del torneo"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <input
        type="number"
        placeholder="Cupos disponibles"
        value={spots}
        onChange={e => setSpots(Number(e.target.value))}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        min={2}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        rows={3}
        required
      />
      <button type="submit" disabled={loading} className="w-full py-2 font-semibold text-[var(--foreground)] bg-[var(--pastel-blue)] rounded hover:bg-[var(--pastel-green)] transition-colors disabled:opacity-60">
        {loading ? "Creando..." : "Crear Torneo"}
      </button>
      {error && <p className="text-red-600 text-center">{error}</p>}
      {success && <p className="text-green-600 text-center">{success}</p>}
    </form>
  );
}
