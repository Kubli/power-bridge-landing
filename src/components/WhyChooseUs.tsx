import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Data-Driven Decisions, Made Affordable",
      description: "Get affordable, tailored dashboards that empower your managers to make data-driven decisions.",
    },
    {
      title: "Your Business, Your Way",
      description: "We guide you through the entire process, from identifying your needs to building a customized, easy-to-maintain solution that integrates seamlessly with your systems.",
    },
    {
      title: "More Than Just Dashboards, We're Your Partners",
      description: "As your dedicated partners in data-driven success, we provide ongoing support and expertise to help you achieve your business goals.",
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
                <CheckCircle className="h-6 w-6 text-msblue-500 mr-2 shrink-0" />
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