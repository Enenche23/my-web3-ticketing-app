import { Navbar } from '@/components/Navbar';
import { Calendar, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-hero">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center text-white">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/20">
              ✨ Powered by Web3 Technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of <span className="text-white">Event Ticketing</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Discover, create, and attend amazing events with blockchain-powered tickets. Secure, transparent, and truly owned by you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/discover"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 rounded-md px-8"
            >
              Explore Events
            </Link>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white border border-white/20 hover:bg-white/20 h-11 rounded-md px-8">
              Get Started
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                10K<span className="text-white">+</span>
              </h3>
              <p className="text-white/80">Events Created</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                50K<span className="text-white">+</span>
              </h3>
              <p className="text-white/80">Tickets Sold</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                100<span className="text-white">%</span>
              </h3>
              <p className="text-white/80">Secure</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-4 text-white" />
              <h3 className="text-lg font-semibold">Easy Discovery</h3>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-4 text-white" />
              <h3 className="text-lg font-semibold">Community Driven</h3>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-4 text-white" />
              <h3 className="text-lg font-semibold">Web3 Powered</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}