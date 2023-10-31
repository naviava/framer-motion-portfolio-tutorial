import Hero from "~/components/hero";
import Cursor from "~/components/cursor";
import Contact from "~/components/contact";
import Parallax from "~/components/parallax";
import Services from "~/components/services";
import Portfolio from "~/components/portfolio";
import Navbar from "~/components/navbar/navbar";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Cursor />
      <section id="homepage" className="h-[100vh] snap-center">
        <Navbar />
        <Hero />
      </section>
      <section id="services" className="h-[100vh] snap-center">
        <Parallax type="services" />
      </section>
      <section className="h-[100vh] snap-center">
        <Services />
      </section>
      <section id="portfolio" className="h-[100vh] snap-center">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact" className="h-[100vh] snap-center">
        <Contact />
      </section>
    </div>
  );
}
