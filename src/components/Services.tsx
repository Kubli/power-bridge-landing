import { Gauge, Waypoints } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg border border-gray-200 hover:border-msblue-500 transition-colors">
            <div className="w-12 h-12 bg-msblue-50 rounded-lg flex items-center justify-center mb-4">
              <Gauge className="h-6 w-6 text-msblue-500" />
              <h3 className="text-xl font-semibold mb-3">Dashboard Solutions</h3>
            </div>
            <h2 className="text-lg font-semibold mb-2">Unlock the Power of Your Data with Custom Dashboards</h2>
            <p className="text-gray-600">
              Gain a clear and comprehensive view of your key performance indicators with our tailored dashboards, designed to integrate seamlessly with your existing systems and empower data-driven decision-making. We leverage leading platforms like Power BI and Looker Studio to create solutions that are both powerful and easy to use.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:border-msblue-500 transition-colors">
            <div className="w-12 h-12 bg-msblue-50 rounded-lg flex items-center justify-center mb-4">
              <Waypoints className="h-6 w-6 text-msblue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Power Automate Solutions</h3>
            <p className="text-gray-600">
              Streamline your business processes with automated workflows. We create custom Power Automate solutions to save time and reduce manual tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;