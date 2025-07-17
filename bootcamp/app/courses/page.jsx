import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
    {
      title: 'Frontend Web Development',
      description: 'Learn HTML, CSS, JavaScript, and React to build stunning websites from scratch.',
      level: 'Beginner – Intermediate',
      duration: '12 Weeks',
      icon: <Users className="w-5 h-5 text-purple" />,
      topics: [
        'HTML & Semantic Markup',
        'CSS & Responsive Design',
        'JavaScript Fundamentals',
        'Version Control with Git',
        'React Basics',
        'Deploying Projects'
      ]
    },
    {
      title: 'UI/UX Design Fundamentals',
      description: 'Understand design principles, Figma workflows, and how to create clean interfaces.',
      level: 'Beginner',
      duration: '6 Weeks',
      icon: <Star className="w-5 h-5 text-purple" />,
      topics: [
        'Design Principles & Color Theory',
        'Wireframing & Prototyping',
        'Using Figma Effectively',
        'User Research Basics',
        'Designing for Accessibility',
        'Creating UI Components'
      ]
    },
  ];
  

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-24 ">

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/bg-pattern.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-purple tracking-tight">
              Our Avaivalbe Courses
            </h1>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <p className="text-slate-600 max-w-2xl mx-auto text-2xl">
        Carefully crafted curriculums to take you from absolute beginner to confident solutions specialist.
      </p>
    </div>

    <div className="relative border-l-4 border-purple/30 pl-6 space-y-12">
      {courses.map((course, i) => (
        <div key={i} className="relative">
          {/* Timeline Dot */}
          <div className="absolute -left-3 top-2 w-6 h-6 bg-purple rounded-full border-4 border-white shadow-md"></div>

          {/* Course Card */}
          <div className="border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple mb-1">{course.title}</h3>
            <p className="text-slate-600 mb-4">{course.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple" />
                <span>{course.level}</span>
              </div>
              {course.students && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple" />
                  <span>{course.students}</span>
                </div>
              )}
            </div>

            {/* Toggleable Module Preview */}
            <details className="group">
              <summary className="text-purple font-medium cursor-pointer select-none group-open:mb-2">
                What you’ll learn <span className="ml-1">▼</span>
              </summary>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                {course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
