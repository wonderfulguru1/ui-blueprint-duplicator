import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo-bottom-white.png";
export const Navigation = ({ whiteBg = false }: { whiteBg?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  const solid = whiteBg || pathname !== "/" || scrolled || open;
  return (
    <header className={`g-nav ${solid ? "g-nav-solid" : ""}`}>
      <Link to="/" aria-label="Genesia Properties home" className="g-brand">
        <img src={logo} alt="" />
        <span>
          Genesia<small>PROPERTIES</small>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className={open ? "g-links is-open" : "g-links"}
      >
        {[
          ["/", "Home"],
          ["/about-us", "Our story"],
          ["/products", "Properties"],
          ["/realtor", "Become a realtor"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <Link
            key={to}
            to={to}
            aria-current={pathname === to ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <Link to="/appointment" className="g-nav-cta">
          Book a viewing <ArrowUpRight size={16} />
        </Link>
      </nav>
      <button
        className="g-menu"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
};
