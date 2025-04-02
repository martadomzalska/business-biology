import "../styles/businessBiology.css";
import SectionTitle from "./SectionTitle";

const BusinessBiology = () => {
  return (
    <section className="business-biology">
      <SectionTitle>Business Biology</SectionTitle>
      <div className="cards-wrapper">
        <div className="card right">
          <h3>Biology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin odio egestas
            leo pharetra purus sed mauris. Sollicitudin odio egestas leo
            pharetra purus sed mauris. Sollicitudin odio egestas leo pharetra
            purus sed mauris.
          </p>
          <button>button</button>
        </div>
        <div className="card left">
          <h3>Business</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin odio egestas
            leo pharetra purus sed mauris. Sollicitudin odio egestas leo
            pharetra purus sed mauris. Sollicitudin odio egestas leo pharetra
            purus sed mauris.
          </p>
          <button>button</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessBiology;
