import React, { useRef, useState } from 'react';
import { Product } from '@/lib/supabase';
import { ProductFormData, useCreateProduct, useUpdateProduct } from '@/hooks/useAdminProducts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ImagePlus, Link as LinkIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  open: boolean;
  onClose: () => void;
  product?: Product | null;
}

const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=200&auto=format&fit=crop';

export const ProductForm: React.FC<Props> = ({ open, onClose, product }) => {
  const isEdit = !!product;
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ProductFormData>({
    title: product?.title ?? '',
    location: product?.location ?? '',
    price: product?.price ?? '',
    sqft: product?.sqft ?? '',
    type: product?.type ?? 'Sale',
    agent_name: product?.agent_name ?? 'Genesia Properties',
    agent_avatar: product?.agent_avatar ?? DEFAULT_AVATAR,
    time_ago: product?.time_ago ?? 'New Listing',
    show_price: product?.show_price ?? false,
    description: product?.description ?? '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(
    // pre-fill URL field only with real http URLs, not broken local paths
    product?.image?.startsWith('http') ? product.image : ''
  );
  const [preview, setPreview] = useState<string>(
    product?.image?.startsWith('http') ? product.image : ''
  );
  const [error, setError] = useState('');

  const create = useCreateProduct();
  const update = useUpdateProduct();
  const isPending = create.isPending || update.isPending;

  const set = (key: keyof ProductFormData) => (value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImageUrl('');
    setPreview(URL.createObjectURL(file));
  };

  const handleUrlChange = (url: string) => {
    setImageUrl(url);
    setImageFile(null);
    setPreview(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isEdit && !imageFile && !imageUrl.trim()) {
      setError('Please upload an image or paste an image URL.');
      return;
    }

    try {
      if (isEdit) {
        await update.mutateAsync({
          id: product!.id,
          formData: form,
          imageFile,
          imageUrl,
          currentImage: product!.image,
        });
      } else {
        await create.mutateAsync({ formData: form, imageFile, imageUrl });
      }
      onClose();
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#06112a]">
            {isEdit ? 'Edit Product' : 'Add New Product'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">

          {/* Image section */}
          <div>
            <Label className="mb-2 block">Product Image</Label>

            {/* Preview */}
            {preview && (
              <div className="mb-3 rounded-xl overflow-hidden border">
                <img src={preview} alt="preview" className="w-full h-48 object-cover" />
              </div>
            )}

            {/* Upload file */}
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-4 text-sm text-gray-500 hover:border-[#D2A136] hover:text-[#D2A136] transition-colors"
            >
              <ImagePlus className="w-4 h-4" />
              {imageFile ? imageFile.name : 'Click to upload image file'}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or paste URL</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* URL input */}
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <Input
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => handleUrlChange(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-6">
              Upload the image to Supabase Storage → copy the public URL → paste above
            </p>
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => set('title')(e.target.value)}
              placeholder="e.g. Birnin Zamani"
              required
            />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={form.location}
              onChange={(e) => set('location')(e.target.value)}
              placeholder="e.g. Apo Waru-Burun, Abuja"
              required
            />
          </div>

          {/* Price + Sqft */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Starting Price</Label>
              <Input
                id="price"
                value={form.price}
                onChange={(e) => set('price')(e.target.value)}
                placeholder="e.g. ₦4,999,999"
                required
              />
            </div>
            <div>
              <Label htmlFor="sqft">Plot Size</Label>
              <Input
                id="sqft"
                value={form.sqft}
                onChange={(e) => set('sqft')(e.target.value)}
                placeholder="e.g. 150–500sqm"
                required
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <Label>Listing Type</Label>
            <Select value={form.type} onValueChange={(v) => set('type')(v as 'Sale' | 'Rent')}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sale">For Sale</SelectItem>
                <SelectItem value="Rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Show Price */}
          <div className="flex items-center justify-between rounded-lg border px-4 py-3">
            <div>
              <p className="text-sm font-medium">Show price on card</p>
              <p className="text-xs text-gray-500">Display the price badge over the image</p>
            </div>
            <Switch checked={form.show_price} onCheckedChange={(v) => set('show_price')(v)} />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => set('description')(e.target.value)}
              placeholder="Write a detailed description of the property — location highlights, title documents, payment plans, nearby landmarks, etc."
              rows={5}
              className="mt-1 resize-none"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose} disabled={isPending}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending} className="flex-1 bg-[#06112a] hover:bg-[#0d2147] text-white">
              {isPending ? 'Saving…' : isEdit ? 'Update Product' : 'Add Product'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
