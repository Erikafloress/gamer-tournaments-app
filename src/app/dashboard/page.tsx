"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import TournamentCard from "@/components/TournamentCard";

export default function DashboardPage() {
  const [tournaments, setTournaments] = useState<any[]>([]);
  const [userTournaments, setUserTournaments] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUserAndTournaments = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (!user) {
        setLoading(false);
        return;
      }
      // Obtener torneos
      const { data: tournaments } = await supabase.from("tournaments").select("*").order("date", { ascending: true });
      setTournaments(tournaments || []);
      // Obtener inscripciones del usuario
      const { data: userTournaments } = await supabase
        .from("user_tournaments")
        .select("tournament_id")
        .eq("user_id", user.id);
      setUserTournaments(userTournaments?.map((ut: any) => ut.tournament_id) || []);
      setLoading(false);
    };
    getUserAndTournaments();
  }, []);

  const handleRegister = async (tournamentId: string) => {
    if (!user) return;
    await supabase.from("user_tournaments").insert({ user_id: user.id, tournament_id: tournamentId });
    setUserTournaments([...userTournaments, tournamentId]);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Debes iniciar sesión para ver los torneos.</h2>
          <a href="/login" className="text-blue-600 hover:underline">Ir a iniciar sesión</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--pastel-blue)]">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Torneos Disponibles</h1>
        <div className="space-y-6">
          {tournaments.length === 0 && <p>No hay torneos disponibles.</p>}
          {tournaments.map((torneo) => (
            <TournamentCard
              key={torneo.id}
              torneo={torneo}
              inscrito={userTournaments.includes(torneo.id)}
              onRegister={() => handleRegister(torneo.id)}
            />
          ))}
        </div>
        <div className="mt-10 bg-[var(--pastel-yellow)] rounded p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Mis torneos inscritos</h2>
          <ul className="list-disc pl-6">
            {tournaments.filter(t => userTournaments.includes(t.id)).map(t => (
              <li key={t.id}>{t.name} ({t.date})</li>
            ))}
            {tournaments.filter(t => userTournaments.includes(t.id)).length === 0 && <li>No estás inscrito en ningún torneo.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
