-- Tabla de torneos
CREATE TABLE public.tournaments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  date date NOT NULL,
  spots integer NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Tabla de inscripciones de usuarios a torneos
CREATE TABLE public.user_tournaments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  tournament_id uuid REFERENCES public.tournaments(id) ON DELETE CASCADE,
  registered_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, tournament_id)
);
