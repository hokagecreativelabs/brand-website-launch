import Link from 'next/link';
import React from 'react'

export default function CoursesWeOffer() {
    const courses = [
      {
        title: 'Git/GitHub (VCS)',
        description: 'Master version control systems and collaborative development workflows for team-based projects',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        title: 'HTML',
        description: 'Build the foundation of web development with semantic markup and modern HTML5 standards',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        title: 'CSS',
        description: 'Create stunning visual designs, responsive layouts, and modern styling techniques',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      {
        title: 'JavaScript',
        description: 'Bring your websites to life with interactive functionality and dynamic user experiences',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        title: 'Web Development',
        description: 'Build and deploy frontent interfaces using modern frameworks',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        title: 'UI/UX Design',
        description: 'Design intuitive user experiences and beautiful interfaces that users love',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      }
    ];
  
    return (
      <section className="bg-white py-20 px-2 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-vastago font-black text-[#21083F] mb-6">
              Courses We Offer
            </h2>
            <p className="text-xl text-gray-700 font-nohemi leading-relaxed max-w-2xl mx-auto">
              Master the essential skills that will transform you into a skilled developer
            </p>
          </div>
          
          {/* Centered Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#21083F]/20"></div>
            
            {courses.map((course, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0 group">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-white border-4 border-[#21083F] rounded-full flex items-center justify-center shadow-lg group-hover:border-black transition-colors duration-300 p-2">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Connecting line */}
                <div className="w-8 h-0.5 bg-[#21083F]/30 mt-6 group-hover:bg-black transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="flex-1 ml-2">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-[#7FF41A]/20 transition-all duration-300">
                    <h3 className="text-2xl font-vastago font-bold text-[#21083F] mb-3 group-hover:text-black transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 font-nohemi leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 font-semibold text-white bg-purple rounded-full hover:bg-purple/90 transition-all duration-300"
              >
                Join Upcoming Bootcamp
                <svg
                  className="w-6 h-6 ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8" />
                </svg>
              </Link>
            </div>
      </section>
    );
}