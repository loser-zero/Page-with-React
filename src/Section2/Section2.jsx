import Slider from "../Tools/Slider";
import "../Section2/Section2.css";
import SliderData from "./SliderData";

export default function Section2() {
  return (
    <section className="slider-section">
      <h3 className="h3">Partner stores</h3>
      <Slider data={SliderData} slideWidth={423} slideMargin={52} slideHeight={317}/>
      <button className="section2-button">
        <p>View all stores</p>
        <img src="Frame (6).svg" />
      </button>
      <p style={{textAlign:"left", marginTop:"12px"}}>Klarna may get a commission.</p>
    </section>
  );
}
