
import { Zap, Shield, HeartHandshake, Clock, Globe } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Private by Design",
      description: "Your data stays secure and local hosted on your own device for maximum privacy and peace of mind."
    },
    {
      icon: Zap,
      title: "Blazing Fast Response",
      description: "Real-time fall detection powered by optimized algorithms ensures instant alerts without any lag."
    },
    {
      icon: HeartHandshake,
      title: "Effortless Setup",
      description: "Get started in minutes no complex configuration, just plug, run, and protect."
    },
    {
      icon: Globe,
      title: "Works Anywhere",
      description: "Seamlessly compatible across platforms, whether it’s Windows, macOS, or Linux, we’ve got you covered."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
