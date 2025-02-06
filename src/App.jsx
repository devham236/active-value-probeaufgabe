import Navbar from "./components/Navbar";
import IntroBanner from "./components/IntroBanner";
import Hero from "./components/Hero";
import ServiceJobs from "./components/ServiceJobs";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <main>
      <Navbar />
      <IntroBanner />
      <Hero />
      <ServiceJobs />
      <NewsletterBanner />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;
