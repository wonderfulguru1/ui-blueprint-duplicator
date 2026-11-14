import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-bottom-white.png";
export const Footer = () => (
  <footer className="g-footer">
    <div className="g-footer-top">
      <div className="g-footer-brand">
        <Link to="/" aria-label="Genesia Properties home">
          <img src={logo} alt="" />
          <span>
            Genesia<small>PROPERTIES</small>
          </span>
        </Link>
        <p>
          We don’t just sell land.
          <br />
          We sell the foundation for your dream.
        </p>
      </div>
      <div>
        <h3>Discover</h3>
        <Link to="/about-us">Our story</Link>
        <Link to="/products">Our properties</Link>
        <Link to="/realtor">Become a realtor</Link>
        <Link to="/appointment">Book an appointment</Link>
      </div>
      <div>
        <h3>Our locations</h3>
        <Link to="/products">
          Kuje, Abuja <ArrowUpRight size={13} />
        </Link>
        <Link to="/products">
          Dei-dei, Abuja <ArrowUpRight size={13} />
        </Link>
        <Link to="/contact">Visit our office</Link>
        <p>
          Bricks n more plaza,
          <br />
          5th Avenue, Gwarimpa
        </p>
      </div>
      <div>
        <h3>Let’s talk</h3>
        <a href="tel:+2348065046516">+234 806 504 6516</a>
        <a href="mailto:info@genesiaproperties.com">
          info@genesiaproperties.com
        </a>
        <a
          href="https://wa.me/2348065046516"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
    <div className="g-footer-bottom">
      <span>
        © {new Date().getFullYear()} Genesia Properties. All rights reserved.
      </span>
      <span>
        Abuja, Nigeria <span className="g-gold-dot" /> Built for what’s next.
      </span>
    </div>
  </footer>
);
