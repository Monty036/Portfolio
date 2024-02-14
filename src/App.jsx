import "./App.scss"
import Hero from "./Components/Hero/Hero";
import "./Components/Navbar/Navbar"
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/parallax/Parallax"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="What I do?"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Projects"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact">
        <Contact />
      </section>
  </div>;
};

export default App;
