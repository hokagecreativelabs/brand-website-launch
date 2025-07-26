'use client'

import React, { useState } from 'react'
import { WandSparkles, UserPlus, Hammer, MessageCircle, Clock, Smile  } from 'lucide-react'
import TransformSection from '@/components/TransformSection'

export default function AboutBootcampPage() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Structured Learning",
        desc: "Gain clear, step-by-step guidance through our curriculum.",
        color: "bg-emerald-500"
      },
      {
        icon: <WandSparkles className="w-8 h-8" />,
        title: "Creative Freedom",
        desc: "Explore your ideas while guided by a project-based structure.",
        color: "bg-violet-500"
      },
      {
        icon: <UserPlus className="w-8 h-8" />,
        title: "Zero Experience Needed",
        desc: "Beginner-friendly. No coding or design background required.",
        color: "bg-sky-500"
      },
      {
        icon: <Hammer className="w-8 h-8" />,
        title: "Hands-On Projects",
        desc: "Gain practical skills from day one.",
        color: "bg-orange-500"
      },
      {
        icon: <MessageCircle className="w-8 h-8" />,
        title: "Live Support & Feedback",
        desc: "Get timely help and reviews from mentors and peers.",
        color: "bg-rose-500"
      },
      {
        icon: <Smile className="w-8 h-8" />,
        title: "Beginner Friendly",
        desc: "Whether you're a stay-at-home mom or switching from Home Economics — we got you!",
        color: "bg-indigo-500"
      }
  ]

  const benefits = [
    {
      number: "01",
      title: "First Cohort Experience",
      text: "Join our pioneering cohort and help shape the future of web development education. Get personalized attention as we build something special together."
    },
    {
      number: "02", 
      title: "Modern Learning Approach",
      text: "No outdated LMS or rigid systems. Learn through live sessions, real-time collaboration, and hands-on projects that mirror actual development workflows."
    },
    {
      number: "03",
      title: "Build While You Learn",
      text: "Start building real applications from day one. Graduate with a portfolio that showcases your skills to potential employers."
    },
    {
        number: "04",
        title: "Community-Driven",
        text: "Be part of a supportive community that encourages collaboration, knowledge sharing, and networking. Connect with like-minded peers and mentors."
    }
  ]

  return (
    <main className="min-h-screen pt-32">
      {/* Hero Banner */}
      <section className="relative h-24 md:h-80 overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/bg-pattern.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay to improve contrast */}
        <div className="absolute inset-0"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-purple tracking-tight">
              About The Academy
            </h1>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-12 px-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-purple mb-8 leading-tight">
            Master Web Development Through Real-World Experience
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Our academy is more than just another coding bootcamp. We're a community-driven learning experience 
              focused on practical skills, real projects, and career transformation.
            </p>
            <p>
              Built by developers, for developers, we understand that the best way to learn coding is by actually 
              coding. Our curriculum emphasizes hands-on learning, industry best practices, and the tools you'll 
              use in your first job.
            </p>
            <p>
              Whether you're switching careers, upskilling, or starting fresh, our intensive program will take you 
              from beginner to job-ready developer in just 12 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-12 px-2 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Why Join Our Virtual Bootcamp?
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Be part of our inaugural cohort and experience a fresh approach to web development education
      </p>
    </div>

    {/* First Row: 4 Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {features.slice(0, 4).map((feature, i) => (
        <div
          key={i}
          className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
          <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>

    {/* Second Row: Center 2 Cards on Desktop */}
    <div className="flex flex-col md:flex-row lg:justify-center gap-8">
      {features.slice(4).map((feature, i) => (
        <div
          key={i + 4}
          className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer w-full md:w-1/2 lg:w-1/4"
        >
          <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
          <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Benefits Section with Code Snippet */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-purple">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left - Text */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          What to Expect from Our Bootcamp
        </h2>
        <div className="space-y-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                {benefit.number}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Code Block */}
      <div className="relative">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 md:p-20 text-white text-sm sm:text-base overflow-auto">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
            <div className="text-green-400">// Your future starts here</div>
            <div className="text-blue-400">function</div>
            <div className="text-yellow-400 ml-4">buildYourCareer</div>
            <div className="text-white">()</div>
            <div className="text-purple-400 ml-4">return</div>
            <div className="text-green-400 ml-8">'success'</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      {/* <TransformSection /> */}
    </main>
  )
}