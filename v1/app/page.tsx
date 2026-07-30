import Header from "./components/Header";
import Hero from "./components/Hero";
import SeenByMillions from "./components/SeenByMillions";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SeenByMillions />
      <Waitlist />
      <Footer />
    </main>
  );
}
