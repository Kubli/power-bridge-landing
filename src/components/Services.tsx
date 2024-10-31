import { Gauge, Waypoints } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg border border-gray-200 hover:border-msblue-500 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-msblue-50 rounded-lg flex items-center justify-center">
                <Gauge className="h-6 w-6 text-msblue-500" />
              </div>
              <h3 className="text-2xl font-semibold">Dashboard Solutions</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2">Unlock the Power of Your Data with Custom Dashboards</h4>
            <p className="text-gray-600">
              Gain a clear and comprehensive view of your key performance indicators with our tailored dashboards, designed to integrate seamlessly with your existing systems and empower data-driven decision-making. We leverage leading platforms like Power BI and Looker Studio to create solutions that are both powerful and easy to use.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:border-msblue-500 transition-colors">
            
          <div className="flex items-center gap-4 mb-3">

            <div className="w-12 h-12 bg-msblue-50 rounded-lg flex items-center justify-center">
              <Waypoints className="h-6 w-6 text-msblue-500" />
            </div>
            <h3 className="text-2xl font-semibold">Expert Consulting</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2">Navigate Your Data Journey with Expert Guidance</h4>

            <p className="text-gray-600">
              Our experienced consultants provide strategic advice and hands-on support to help you identify, analyze, and leverage your data for maximum impact. From business analysis and KPI identification to custom integrations and training, we're your dedicated partners in data-driven success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;