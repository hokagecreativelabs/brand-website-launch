import React from 'react'

export default function AboutBootcamp() {
  return  (
    <section className="relative py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-purple text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 text-white opacity-11"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-12 relative z-10">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium uppercase tracking-wider">About Our Bootcamp</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Transform Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Creative Vision</span>
              <div className="absolute inset-0 bg-white/20 transform -rotate-1 rounded-lg blur-sm"></div>
            </span>
            <br />
            Into Real Skills
          </h2>

          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-purple-100 font-light leading-relaxed">
            Our bootcamp is designed for absolute beginners who want to master web development. 
            Build hands-on projects, gain industry-relevant skills, and be guided by experienced mentors. 
            {/* <span className="font-semibold text-white"> No jargon, no filler—just pure, transformative learning.</span> */}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { 
              icon: "⏰", 
              title: "Flexible Duration", 
              desc: "Self-paced learning with structured milestones and deadlines",
              gradient: "from-pink-500/20 to-purple-500/20"
            },
            { 
              icon: "👨‍🏫", 
              title: "Expert Mentorship", 
              desc: "Work directly with industry professionals who've been there",
              gradient: "from-blue-500/20 to-purple-500/20"
            },
            { 
              icon: "🛠", 
              title: "Portfolio Projects", 
              desc: "Build real projects that showcase your skills to employers",
              gradient: "from-green-500/20 to-blue-500/20"
            },
            { 
              icon: "🌐", 
              title: "Online Community", 
              desc: "Join a supportive network of creators and lifelong learners",
              gradient: "from-orange-500/20 to-pink-500/20"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-300/60 rounded-full animate-ping delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Start Your Journey?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-white text-purple text-lg px-10 py-4 rounded-full">
              <span className="relative z-10">Explore Our Programs</span>
              <div className="absolute inset-0 bg-purple-50 rounded-full"></div>
            </button>
            
            <div className="flex items-center gap-3 text-purple-100 group cursor-pointer">
              <span className="text-base font-medium group-hover:text-white transition-colors duration-300">
                Learn about our approach
              </span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}