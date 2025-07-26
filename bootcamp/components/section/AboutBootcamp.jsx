'use client'

import Link from 'next/link'
import React from 'react'

export default function AboutBootcamp() {
  return (
    <section className="py-24 px-2 sm:px-8 md:px-12 bg-purple text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium uppercase tracking-wider">About Our Bootcamp</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Transform Your{' '}
            <span className="text-lemon">Creative Vision</span><br />
            Into Real Skills
          </h2>

          <p className="text-lg text-purple-100 leading-relaxed">
            Our bootcamp is designed for absolute beginners who want to master web development. 
            Build hands-on projects, gain industry-relevant skills, and be guided by experienced mentors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/courses">
            <button className="group relative bg-white text-purple text-lg px-8 py-4 rounded-full font-semibold hover:bg-lemon hover:text-purple transition-all">
              Explore Our Programs
            </button>
          </Link>

            {/* <div className="flex items-center gap-3 text-purple-100 hover:text-white cursor-pointer">
              <span className="text-base font-medium">Learn about our approach</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div> */}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: "⏰",
              title: "Flexible Duration",
              desc: "Self-paced learning with structured milestones",
            },
            {
              icon: "👨‍🏫",
              title: "Expert Mentorship",
              desc: "Work directly with professionals who’ve been there",
            },
            {
              icon: "🛠",
              title: "Portfolio Projects",
              desc: "proof of learning through projects you can showcase",
            },
            {
              icon: "🌐",
              title: "Online Community",
              desc: "A supportive network of creators & learners",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
