import "./Section3.css";

export default function Section3() {
  return (
    <section className="section3">
      <div className="section-container">
        <div className="section-container3">
          <p id="first-p" className="text">Klarna Card</p>
          <h3 className="text h3section">Pay anywhere that accepts Visa.</h3>
          <p id="second-p" className="text">
            More time to pay is what we do. Charging interest? Not our thing.
            The Klarna Card has a 0% APR. Your credit score won’t be affected
            when you apply for or use the Klarna Card.
          </p>
          <button id="section-3-button">Learn more</button>
        </div>
        <div className="section-container-img">
          <img src="IMAGE (8).svg" />
        </div>
      </div>
    </section>
  );
}
