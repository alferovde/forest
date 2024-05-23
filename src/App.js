import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import "./main.scss";
import SliderSection from "./Components/SliderSection/SliderSection";
import Artefacts from "./Components/Artefacts/Artefacts";
import HelpProject from "./Components/HelpProject/HelpProject";
import "animate.css";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Cormorant", "Open Sans"],
      },
    });
  }, []);

  return (
    <main className="mainsection">
      <Header />
      <Hero />
      <SliderSection />
      <Artefacts />
      <HelpProject />
      <Footer />
    </main>
  );
}

export default App;
