'use client';
import React from 'react';
import { Clock } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple px-4">
      <div className="max-w-2xl text-center space-y-8">
        <div className="flex items-center justify-center">
          <Clock className="w-14 h-14 text-lemon" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Something Exciting is on the Way!
        </h1>

        <p className="text-lg md:text-xl text-gray-400 font-medium">
          We're working behind the scenes to bring you something valuable. <br />
          Stay tuned — it’ll be worth the wait.
        </p>

        {/* Optional Notify Button */}
        <div className="flex justify-center gap-6">
          <button className="bg-white hover:bg-purple hover:text-white hover:border text-purple font-semibold py-3 px-6 rounded-lg transition duration-300">
            <a href="/">Go back to Home</a>
          </button>
          <button className="border hover:bg-white text-white hover:text-purple font-semibold py-3 px-6 rounded-lg transition duration-300">
            <a href="https://hokagecreativelabs.com">Our Company</a>
          </button>
        </div>

        <p className="text-sm text-lemon">© {new Date().getFullYear()} HCL Academy. All rights reserved.</p>
      </div>
    </main>
  );
}
