import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Consultation",
      description: "Our team brings years of experience in Power Platform solutions.",
    },
    {
      title: "Custom Solutions",
      description: "We create tailored solutions that match your specific business needs.",
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support to ensure your solutions keep delivering value.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-msblue-500 mr-2" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;