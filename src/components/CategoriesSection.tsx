import { Wallet, BadgeCheck, House, TrendingUp } from "lucide-react";
const values = [
  {
    icon: Wallet,
    name: "Flexible payment plans",
    text: "Take the first step with payment options designed around your plans.",
  },
  {
    icon: BadgeCheck,
    name: "Quality delivery",
    text: "A commitment to the quality and care your property journey deserves.",
  },
  {
    icon: House,
    name: "Thoughtful locations",
    text: "Explore places with access to amenities for a comfortable living experience.",
  },
  {
    icon: TrendingUp,
    name: "Room to grow",
    text: "Choose land with your future in mind, whether you plan to build or invest.",
  },
];
export const CategoriesSection = () => (
  <section className="g-values g-section">
    <div className="g-section-heading">
      <div>
        <p className="g-eyebrow">02 / THE GENESIA DIFFERENCE</p>
        <h2>
          Big possibilities.
          <br />
          <em>Considered details.</em>
        </h2>
      </div>
      <p>
        A simpler path to ownership,
        <br />
        with support at every step.
      </p>
    </div>
    <div className="g-values-grid">
      {values.map(({ icon: Icon, name, text }, i) => (
        <article key={name}>
          <div className="g-value-top">
            <Icon size={27} strokeWidth={1.2} />
            <span>0{i + 1}</span>
          </div>
          <h3>{name}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  </section>
);
