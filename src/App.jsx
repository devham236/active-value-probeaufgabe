import React from "react";
import Navbar from "./components/Navbar";
import IntroBanner from "./components/IntroBanner";
import HeroElement from "./components/HeroElement";
import ServiceJobs from "./components/ServiceJobs";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <main>
      <Navbar />
      <IntroBanner />
      <HeroElement />
      <ServiceJobs />
      <ContactForm />
      <NewsletterBanner />
      <Footer />
    </main>
  );
};

export default App;
