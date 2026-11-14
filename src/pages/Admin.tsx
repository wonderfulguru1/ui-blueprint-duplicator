import React, { useState } from "react";
import { NowSellingManager } from "@/components/NowSelling";
import { useAuth } from "@/hooks/useAuth";
import { useProducts } from "@/hooks/useProducts";
import { ProductList } from "@/components/admin/ProductList";
import { ProductForm } from "@/components/admin/ProductForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LayoutDashboard, LogOut, Plus, Package } from "lucide-react";
import genesiaLogo from "@/assets/genesia-logo.png";

const Admin: React.FC = () => {
  const { user, loading, signIn, signOut } = useAuth();
  const { data: products, isLoading: productsLoading } = useProducts();

  const [showAddForm, setShowAddForm] = useState(false);
  const [section, setSection] = useState<"products" | "promotions">("products");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);
    const { error } = await signIn(email, password);
    setAuthLoading(false);
    if (error) setAuthError(error.message);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-400">Loading…</div>
      </div>
    );
  }

  /* ── Login Screen ── */
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#06112a] to-[#0d2147] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <img
              src={genesiaLogo}
              alt="Genesia Properties"
              className="h-14 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-[#06112a] text-center mb-1">
            Admin Portal
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Sign in to manage your listings
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@genesiaproperties.com"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="mt-1"
              />
            </div>

            {authError && (
              <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2">
                {authError}
              </p>
            )}

            <Button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#06112a] hover:bg-[#0d2147] text-white h-11"
            >
              {authLoading ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Dashboard ── */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#06112a] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img
            src={genesiaLogo}
            alt="Genesia Properties"
            className="h-8 object-contain brightness-0 invert"
          />
          <div className="h-5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-white/90">
            <LayoutDashboard className="w-4 h-4" />
            <span className="font-semibold text-sm">Admin Dashboard</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60 hidden sm:block">
            {user.email}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-[#06112a] gap-1.5"
            onClick={signOut}
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <nav aria-label="Admin sections" className="selling-admin-tabs">
          <button
            type="button"
            aria-pressed={section === "products"}
            onClick={() => setSection("products")}
          >
            Property listings
          </button>
          <button
            type="button"
            aria-pressed={section === "promotions"}
            onClick={() => setSection("promotions")}
          >
            Now Selling popup
          </button>
        </nav>
        {section === "promotions" ? (
          <NowSellingManager />
        ) : (
          <>
            {/* Stats bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#06112a]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#06112a]">
                    {products?.length ?? "–"}
                  </p>
                  <p className="text-xs text-gray-400">Total Listings</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#06112a]">
                    {products?.filter((p) => p.type === "Sale").length ?? "–"}
                  </p>
                  <p className="text-xs text-gray-400">For Sale</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#D2A136]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#06112a]">
                    {products?.filter((p) => p.type === "Rent").length ?? "–"}
                  </p>
                  <p className="text-xs text-gray-400">For Rent</p>
                </div>
              </div>
            </div>

            {/* Product list header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-[#06112a]">
                  All Products
                </h2>
                <p className="text-sm text-gray-400 mt-0.5">
                  Manage your property listings
                </p>
              </div>
              <Button
                className="bg-[#D2A136] hover:bg-[#b88b28] text-white gap-2"
                onClick={() => setShowAddForm(true)}
              >
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
            </div>

            {productsLoading && (
              <p className="text-center text-gray-400 py-16">
                Loading products…
              </p>
            )}
            {products && <ProductList products={products} />}
          </>
        )}
      </main>

      {showAddForm && (
        <ProductForm
          key="new"
          open={showAddForm}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

export default Admin;
