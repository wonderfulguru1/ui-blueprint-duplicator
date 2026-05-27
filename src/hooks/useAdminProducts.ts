import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export interface ProductFormData {
  title: string;
  location: string;
  price: string;
  sqft: string;
  type: 'Sale' | 'Rent';
  agent_name: string;
  agent_avatar: string;
  time_ago: string;
  show_price: boolean;
  description: string;
}

async function uploadImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from('product-images')
    .upload(filename, file, { upsert: true });
  if (error) throw new Error(`Image upload failed: ${error.message}`);
  const { data } = supabase.storage.from('product-images').getPublicUrl(filename);
  return data.publicUrl;
}

async function resolveImage(
  imageFile?: File | null,
  imageUrl?: string,
  currentImage?: string
): Promise<string> {
  if (imageFile) return uploadImage(imageFile);
  if (imageUrl?.trim()) return imageUrl.trim();
  return currentImage ?? '';
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      formData,
      imageFile,
      imageUrl,
    }: {
      formData: ProductFormData;
      imageFile?: File | null;
      imageUrl?: string;
    }) => {
      const image = await resolveImage(imageFile, imageUrl);
      if (!image) throw new Error('Please provide a product image.');
      const { error } = await supabase.from('products').insert({ ...formData, image });
      if (error) throw new Error(error.message);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      formData,
      imageFile,
      imageUrl,
      currentImage,
    }: {
      id: string;
      formData: ProductFormData;
      imageFile?: File | null;
      imageUrl?: string;
      currentImage: string;
    }) => {
      const image = await resolveImage(imageFile, imageUrl, currentImage);
      const { data, error } = await supabase
        .from('products')
        .update({ ...formData, image })
        .eq('id', id)
        .select('id');
      if (error) throw new Error(error.message);
      if (!data || data.length === 0)
        throw new Error('Update blocked by database policy. Run the RLS fix SQL in Supabase → SQL Editor.');
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
  });
}
