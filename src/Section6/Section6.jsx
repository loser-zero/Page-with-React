import Slider from "../Tools/Slider";
import Slider2Data from "./Slider2Data";

export default function Section6() {
  return (
      <section className="slider-section">
      <h3 className="h3">Partner stores</h3>
      <Slider data={Slider2Data} slideWidth={265} slideMargin={52} slideHeight={265}/>
      <button className="section2-button">
        <p>View all deals</p>
        <img src="Frame (6).svg" />
      </button>
      <p style={{textAlign:"left", marginTop:"12px"}}>Klarna may get a commission.</p>
    </section>
  );
}
