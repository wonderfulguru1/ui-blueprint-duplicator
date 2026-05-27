import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '@/hooks/useProduct';
import { ContactBar } from '@/components/ContactBar';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  MapPin,
  Maximize2,
  Phone,
  Mail,
  MessageCircle,
  ArrowLeft,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_PRIMARY = '+234 806 504 6516';
const PHONE_SECONDARY = '08161500050';
const EMAIL = 'info@genesiaproperties.com';
const WHATSAPP = 'https://wa.me/2348065046516';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, isError } = useProduct(id ?? '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <ContactBar />
        <div className="relative">
          <Navigation whiteBg={true} />
        </div>
        <div className="flex-1 flex items-center justify-center mt-24 text-gray-400">
          Loading property…
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <ContactBar />
        <div className="relative">
          <Navigation whiteBg={true} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center mt-24 gap-4">
          <p className="text-gray-500">Property not found.</p>
          <Button onClick={() => navigate('/products')} variant="outline">
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const enquirySubject = encodeURIComponent(`Enquiry: ${product.title}`);
  const enquiryBody = encodeURIComponent(
    `Hello,\n\nI am interested in the property: ${product.title} located at ${product.location}.\n\nPlease send me more details.\n\nThank you.`
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ContactBar />
      <div className="relative">
        <Navigation whiteBg={true} />
      </div>

      {/* Hero */}
      <div className="mt-24 relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Breadcrumb + title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-1.5 text-white/70 text-sm mb-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium truncate">{product.title}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 mt-3 text-white/80">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="text-sm md:text-base">{product.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — Description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#06112a] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to listings
              </button>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#06112a] mb-4">About This Property</h2>
                {product.description ? (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                ) : (
                  <p className="text-gray-400 italic">
                    No description added yet. Edit this product in the admin panel to add one.
                  </p>
                )}
              </div>

              {/* Property image (full) */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover"
                />
              </div>

              {/* Key details */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#06112a] mb-5">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Location</span>
                    <span className="font-semibold text-[#06112a] flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D2A136]" />
                      {product.location}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Plot Size</span>
                    <span className="font-semibold text-[#06112a] flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#D2A136]" />
                      {product.sqft}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Listing Type</span>
                    <span className="font-semibold text-[#06112a] flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-[#D2A136]" />
                      For {product.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Pricing + Contact */}
            <div className="space-y-6">

              {/* Price card */}
              <div className="bg-[#06112a] text-white rounded-2xl p-6 shadow-lg">
                <p className="text-white/60 text-sm mb-1">Starting from</p>
                <p className="text-3xl font-bold text-[#D2A136]">{product.price}</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-white/70 text-sm">
                  <Maximize2 className="w-4 h-4" />
                  <span>{product.sqft}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm mt-2">
                  <MapPin className="w-4 h-4" />
                  <span>{product.location}</span>
                </div>
                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                  For {product.type}
                </span>
              </div>

              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
                <h3 className="text-lg font-bold text-[#06112a]">Enquire About This Property</h3>

                <a
                  href={`mailto:${EMAIL}?subject=${enquirySubject}&body=${enquiryBody}`}
                  className="flex items-center gap-3 w-full bg-[#06112a] hover:bg-[#0d2147] text-white rounded-xl px-4 py-3 transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-xs text-white/60">Send us an email</p>
                    <p className="text-sm font-medium">{EMAIL}</p>
                  </div>
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl px-4 py-3 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Chat on WhatsApp</p>
                    <p className="text-sm font-medium">{PHONE_PRIMARY}</p>
                  </div>
                </a>

                <div className="border-t pt-4 space-y-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Call Us</p>
                  <a
                    href={`tel:${PHONE_PRIMARY.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-[#06112a] hover:text-[#D2A136] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{PHONE_PRIMARY}</span>
                  </a>
                  <a
                    href={`tel:${PHONE_SECONDARY}`}
                    className="flex items-center gap-3 text-[#06112a] hover:text-[#D2A136] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{PHONE_SECONDARY}</span>
                  </a>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-gray-400 mb-2">Office Address</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Suite C11, Bricks N' More Plaza,<br />
                    Tai Solarin Street, 5th Avenue,<br />
                    Gwarimpa, Abuja.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
