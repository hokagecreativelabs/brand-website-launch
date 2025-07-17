import React from 'react'

export default function TransformSection() {
  return (
<section className="py-16 md:py-12 px-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-purple mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Join our inaugural cohort starting <strong>August 1st</strong>. 
            Limited spots available for our first-ever program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              <a href="/register">Register Now!</a>
            </button>
            {/* <button className="text-slate-900 font-semibold hover:text-slate-700 transition-colors">
              Schedule a Call
            </button> */}
          </div>
          <div className="mt-6 text-sm text-slate-700">
            Guarantreed To be the best decision you make this year!
          </div>
        </div>
      </section>
  )
}
