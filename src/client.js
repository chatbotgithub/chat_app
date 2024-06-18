import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sgfwciulmljuptqlouak.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
