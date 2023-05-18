import "../src/assets/scss/App.scss";
import ChooseOption from "./componants/chooseus/ChooseOption";
import HeroSection from "./componants/hero/HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductSection from "./componants/bestproducts/ProductSection";
import Experience from "./componants/experience/Experience";
import MaterialSection from "./componants/material/MaterialSection";
import TestimonialSection from "./componants/testimonials/TestimonialSection";
import SliderMain from "./componants/testimonials/slider/SliderMain";
import Footer from "./componants/common/footer/Footer";


function App() {
  return (
    <div className="App">
      <HeroSection />
      <ChooseOption />
      <ProductSection />
      <Experience />
      <MaterialSection />
      <TestimonialSection />
      <SliderMain/>
    <Footer/>
    </div>
  );
}

export default App;
