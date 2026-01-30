import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSection from "../components/ClientsSection";
import ContactForm from "../components/ContactForm";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <WhyChooseUs />
       <AboutUs />
      <ProjectsSection />
      <ClientsSection />
      <ContactForm />
      <NewsletterSection />
      <Footer />
    </>
  );
}
