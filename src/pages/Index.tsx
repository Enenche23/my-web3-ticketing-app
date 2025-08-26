import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white mb-8">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Powered by Web3 Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">The Future of</span>
            <br />
            <span className="text-primary">Event Ticketing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover, create, and attend amazing events with blockchain-powered tickets. 
            Secure, transparent, and truly owned by you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Explore Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-hero py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Events Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Tickets Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-hero py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Easy Discovery</h3>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Web3 Powered</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
