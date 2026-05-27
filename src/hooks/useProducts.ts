import { useQuery } from '@tanstack/react-query';
import { supabase, Product } from '@/lib/supabase';

async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}
