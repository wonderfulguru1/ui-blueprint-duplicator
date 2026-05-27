import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  type: 'Sale' | 'Rent';
  agent_name: string;
  agent_avatar: string;
  time_ago: string;
  sqft: string;
  show_price: boolean;
  description: string;
  created_at: string;
}
