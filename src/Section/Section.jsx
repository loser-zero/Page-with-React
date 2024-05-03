import "./Section.css";

export default function Section() {
  return (
    <section className="slider-section">
      <h2 id="h2-section">Pay with Klarna.</h2>
      <div className="containers">
        <div className="container">
        <img src="IMAGE (1).svg"/>
          <h5 className="h5-section">Flex your payments</h5>
          <p className="p">
            Enjoy the flexibility to shop what you love and split your purchase
            into 4 interest-free payments. No credit impact to apply.
          </p>
          <button className="button">
            Learn more
            <img className="section-go" src="Go.svg" />
          </button>
        </div>
        <div className="container">
        <img src="IMAGE (2).svg"/>
          <h5 className="h5-section">Never miss a payment</h5>
          <p className="p">
            Get more time to pay when you need it. Extend your due date easily
            in the app. Report returns in the app and we'll pause your payments.
          </p>
          <button className="button">
            Learn more
            <img className="section-go" src="Go.svg" />
          </button>
        </div>
        <div className="container">
        <img src="IMAGE (3).svg"/>
          <h5 className="h5-section">Pay wherever, whenever</h5>
          <p className="p">
            Pay however you like, wherever you want to shop—and do it directly
            from your desktop, phone or in-store.
          </p>
          <button className="button">
            Learn more
            <img className="section-go" src="Go.svg" />
          </button>
        </div>
      </div>
    </section>
  );
}
