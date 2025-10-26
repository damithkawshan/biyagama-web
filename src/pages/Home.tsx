import React from "react";

type Service = { src: string; title: string };

const services: Service[] = [
  { src: "/content/PS/services/billboard.png", title: "Billboard Advertising" },
  { src: "/content/PS/services/businessCert.PNG", title: "Business Certificate" },
  { src: "/content/PS/services/cremat.png", title: "Crematorium Services" },
  { src: "/content/PS/services/envCert.png", title: "Environmental Certificate" },
  { src: "/content/PS/services/gnd.png", title: "Playing Field Booking" },
  { src: "/content/PS/services/houseplan.png", title: "House Plan Approval" },
  { src: "/content/PS/services/jcb.png", title: "Machinery Hire (JCB)" },
  { src: "/content/PS/services/land%20approval.png", title: "Land Approval" },
  { src: "/content/PS/services/pipelin.png", title: "Water Pipeline Services" },
  { src: "/content/PS/services/road.png", title: "Lane Marking & Road Development" },
  { src: "/content/PS/services/tax.png", title: "Tax Services" },
  { src: "/content/PS/services/tree%20cuttin.png", title: "Tree Cutting Permit" },
];

function Home(): JSX.Element {
  const onImageError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null; // avoid loop
    e.currentTarget.src = "/content/images/person-placeholder.svg";
  };

  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const dept = (form.elements.namedItem("department") as HTMLSelectElement)?.value;
    alert(
      `Thank you, ${name}!\n\nYour message has been sent to the ${dept} department.\n\nWe will respond to ${email} within 24 hours.`
    );
    form.reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h2>Welcome to Biyagama Pradeshiya Sabha</h2>
          <p>
            Your official platform for local government services, community updates, and resident
            support. We are committed to developing our beautiful area through consultative and
            people-friendly decisions. (සුන්දර බියගම - Beautiful Biyagama)
          </p>
        </div>
      </section>
      <div className="container">
        {/* Services Section */}
        <section id="services" className="section">
          <h2>Our Services (සේවාවන්)</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.src} className="service-item">
                <a href={s.src} className="service-link" target="_blank" rel="noopener noreferrer">
                  <img src={s.src} alt={s.title} />
                  <h3>{s.title}</h3>
                  <p>Click to view related service image.</p>
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* News & Events Section */}
        <section id="news" className="section">
          <h2>News & Events</h2>
          <p>Latest news and events will appear here.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
