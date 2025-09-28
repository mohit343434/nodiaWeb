"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailSubmit = () => {
    if (email && email.includes("@")) {
      alert(`Thanks! We'll notify you at ${email} when we launch.`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const SocialIcon = ({ children, href = "#" }) => (
    <a
      href={href}
      className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
    >
      {children}
    </a>
  );


  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Wellocia</h1>
              <p className="text-sm text-white/80">Smart Travel Made Simple</p>
            </div>
          </div>
          <button className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-2 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300">
            Get Notified
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  🚀 Coming Soon
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Smart
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
                  Itineraries
                </span>
                for Every Journey
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Skip the expensive packages. Get personalized travel plans with direct booking links and save more on your adventures.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                "✨ AI-Powered Planning",
                "💰 Direct Booking Links",
                "🌍 India & World"
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full">
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4">Be the first to know when we launch!</h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button
                  onClick={handleEmailSubmit}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-pulse">
              {/* India vs World Collage */}
              <div className="grid grid-cols-2 h-96 lg:h-[500px]">
                {/* India Side */}
                <div className="bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-xl mb-2">🇮🇳 Incredible India</h4>
                    <div className="space-y-1 text-sm text-white/90">
                      <p>• Taj Mahal & Heritage Sites</p>
                      <p>• Kerala Backwaters</p>
                      <p>• Himalayan Adventures</p>
                      <p>• Cultural Festivals</p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 left-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce"></div>
                </div>

                {/* World Side */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-xl mb-2">🌍 World Explorer</h4>
                    <div className="space-y-1 text-sm text-white/90">
                      <p>• European Getaways</p>
                      <p>• Asian Adventures</p>
                      <p>• American Roadtrips</p>
                      <p>• Island Paradises</p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-4 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-6 w-6 h-6 bg-green-400/40 rounded-full animate-bounce delay-75"></div>
                </div>
              </div>

              {/* Central Divider */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl">✈️</span>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50%</div>
                <div className="text-sm text-white/80">Cost Savings</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 animate-bounce delay-1000">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Smart Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Links */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <h3 className="text-white font-semibold mb-6">Follow our journey</h3>
          <div className="flex justify-center space-x-6">
            <SocialIcon>
              {/* Twitter */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </SocialIcon>
            <SocialIcon>
              {/* Facebook */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
            <SocialIcon>
              {/* Instagram */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialIcon>
            <SocialIcon>
              {/* LinkedIn */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="text-white font-medium">© 2024 Wellocia. All rights reserved.</span>
          </div>
          <div className="flex space-x-6 text-sm text-white/70">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
              <a key={index} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
