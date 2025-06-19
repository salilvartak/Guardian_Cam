import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <img
            src="\assets\logo.png"
            alt="Loading Logo"
            className="w-32 h-32 z-10"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1473155461/photo/nurse-hands-and-senior-patient-in-empathy-safety-and-support-of-help-trust-and-healthcare.jpg?s=612x612&w=0&k=20&c=I5fh75AaVB0hVNE4-7JeY9g6sugFP4_4ZEQRPAPvJws=')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Fall Detection for 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Elderly Care
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
          Protecting Every Step, Because Every Fall Matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a href="/auth">
          <Button  size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
            Get Started
          </Button>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
