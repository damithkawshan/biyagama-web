import Testimonials from "../components/Testimonials";
import ReactGA from "react-ga4";
import "./Home.css";

const openEmail = () => {
  ReactGA.event({
    category: "Clicks",
    action: "Contact Us",
    label: "contact button clicked!",
    value: 1,
  });
  window.location.href = "mailto:hello@ceygiri.lk";
};

function Home(): JSX.Element {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      >
        <img className="logo" src="/logo.png" alt="Ceygiri Labs" />
        <p className="tagline">Transforming Sri Lankan web landscape</p>

        <button onClick={openEmail}>Contact Us</button>
      </section>
      <section className="row">
        <div className="column">
          <div style={{ margin: "auto", maxWidth: "500px" }}>
            <h2>World class software</h2>
            <h3>From Sri Lanka to the world</h3>
            <p>
              Transform the way you do business with Ceygiri Labs. Our team of
              IoT, AI, mobile, web, and desktop app developers is here to help
              you overcome your business challenges with ease and confidence
            </p>
            <p className="auto-hide">
              We understand that every business is unique, and we work closely
              with our clients to develop custom solutions that meet their
              specific needs and goals. Whether you need to streamline your
              processes, automate your operations, or enhance your customer
              experience, we've got you covered.
            </p>
            <p className="auto-hide">
              Ready to take your business to the next level? Contact Ceygiri
              Labs today to learn more about how we can help you leverage the
              latest technologies and transform the way you do business.
            </p>
          </div>
        </div>
        <div className="column">
          <img src="/section-1.png" alt="Lion entrance to Sigiriya" />
        </div>
      </section>
      <Testimonials />
      <section className="two-rows-section">
        <div className="row">
          <div className="column">
            <img className="icon" src="/aws.png" alt="web architecture" />
            <h2>develop a website</h2>
            <h3>to international standards</h3>
            <p>
              Let your businesses shine on the world stage with custom website
              design and development services that embody their unique
              excellence. From small startups to large corporations, our expert
              team is passionate about creating websites that showcase the
              unbeatable spirit of Sri Lanka.
            </p>
          </div>
          <div className="column">
            <img
              className="icon"
              src="/brain.png"
              alt="artificial intelligence"
            />
            <h2>turn data to insights</h2>
            <h3>leverage the power of AI</h3>
            <p>
              Unlock your business's full potential with our expertise in data
              analysis, AI development, and custom website design. Our team of
              local experts take pride in delivering cutting-edge solutions to
              help you stand out among global leaders.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img className="icon" src="/circuit.png" alt="Circuit diagram" />
            <h2>build electronic products</h2>
            <h3>and software to go with it</h3>
            <p>
              Develop unique electronic products that embody the ingenuity and
              resourcefulness of Sri Lanka. We offer a range of services,
              including product design, prototyping, and manufacturing, as well
              as consulting and support throughout the entire product lifecycle.
            </p>
          </div>
          <div className="column" style={{ margin: "0" }}>
            <img src="/section-3.png" alt="Top view of Sigiriya" />
          </div>
        </div>
      </section>

      <section className="row">
        <div className="column">
          <h2 className="accent">
            not
            <br />
            &nbsp; ^
          </h2>
          <h2>It's &nbsp;&nbsp;&nbsp;&nbsp; impossible</h2>
          <p>
            That’s impossible!!. We heard that when making custom computer
            chips, when giving eyes for self-driving cars, when measuring blood
            pressure from fingers, blockchains and amazing websites.
          </p>
        </div>
        <div className="column" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "18px", maxWidth: "300px" }}>
            Talk to us and see what’s possible
          </h2>
          <button onClick={openEmail}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
