import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} DataPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;