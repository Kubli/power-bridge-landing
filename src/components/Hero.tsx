import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-msblue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transform Your Business with Power Platform Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Expert consulting in PowerBI and Power Automate to help you make data-driven decisions and automate workflows.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-msblue-500 text-white rounded-lg hover:bg-msblue-600 transition-colors animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;