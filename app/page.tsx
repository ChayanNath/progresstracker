"use client";
import React, { useState } from "react";
import {
  Users,
  ArrowRight,
  CheckCircle,
  BarChart,
  MessageSquare,
  Menu,
  X,
  Calendar,
  Share2,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/50 backdrop-blur-lg border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-500" />
              <span className="font-mono text-xl">TeamSync</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-400 hover:text-white transition-colors"
              >
                How it works
              </a>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-white/5">
              <a
                href="#features"
                className="block py-2 text-gray-400 hover:text-white"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block py-2 text-gray-400 hover:text-white"
              >
                How it works
              </a>
              <button className="w-full mt-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Team Updates Made Simple
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Track daily status updates, share team progress, and make meetings
            more productive with our minimal and intuitive platform.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              Start Tracking Now
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Essential Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-purple-500" />}
              title="Daily Updates"
              description="Keep track of your team's daily progress with easy-to-use status updates."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-purple-500" />}
              title="Team Overview"
              description="Get a bird's-eye view of all team activities in one centralized dashboard."
            />
            <FeatureCard
              icon={<Share2 className="h-8 w-8 text-purple-500" />}
              title="Easy Sharing"
              description="Share team status reports instantly during meetings or via channels."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Step
              number="1"
              icon={<CheckCircle className="h-6 w-6 text-purple-500" />}
              title="Update Status"
              description="Team members submit quick daily updates."
            />
            <Step
              number="2"
              icon={<BarChart className="h-6 w-6 text-purple-500" />}
              title="Track Progress"
              description="Monitor team progress in real-time."
            />
            <Step
              number="3"
              icon={<Users className="h-6 w-6 text-purple-500" />}
              title="Team Overview"
              description="Get insights into team performance."
            />
            <Step
              number="4"
              icon={<MessageSquare className="h-6 w-6 text-purple-500" />}
              title="Share Updates"
              description="Present status updates in meetings."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Team Updates?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of teams who have streamlined their daily status
            tracking.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="font-mono">TeamSync</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
