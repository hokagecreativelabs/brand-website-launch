import React from 'react'

export default function WhatYouWillLearn() {
    const items = [
      'HTML Essentials',
      'CSS Styling & Layout',
      'Responsive Design',
      'JavaScript Fundamentals',
      'Building Real Projects',
      'Deployment Basics',
    ];
  
    return (
      <section className="bg-[#A6D1E6] text-[#3D3C42] py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What You'll Learn</h2>
        <ul className="max-w-xl mx-auto space-y-4 text-lg list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="pl-2">{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  