export default function TestimonialSection() {
  const testimonials = [
    {
      text: "Working with Hokage was a game-changer for our brand. Their attention to detail and creativity in designing our brand identity truly set us apart. We’ve never looked better!",
      name: "Joao M.",
      role: "Startup Founder",
    },
    {
      text: "Our website's transformation was incredible. The development team built a lightning-fast, responsive site that perfectly captures our brand’s essence. We’ve seen a significant boost in traffic and engagement!",
      name: "Chinwe Obi",
      role: "Marketing Lead at GreenSprout",
    },
    {
      text: "We needed a custom dashboard for our analytics, and Hokage delivered a masterpiece. Now, our decision-making process is faster and more informed than ever.",
      name: "Lais A.",
      role: "E-commerce Manager at StyleBay",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-4 md:px-8 lg:px-16 pt-16">
      {/* Testimonials Label */}
      <div className="flex items-center justify-center px-6 py-2 border rounded-full border-gray-300">
        <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-vastago font-medium leading-[125%] text-center">
          Testimonials
        </h2>
      </div>

      {/* Section Title */}
      <h2 className="text-[24px] md:text-[32px] font-vastago font-medium leading-[125%] text-center">
        Feedback from past clients
      </h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="tracking-wide w-full max-w-[400px] p-6 gap-5 border border-gray-300 rounded-[12px] shadow-lg flex flex-col text-left bg-[#F9FAFB]"
          >
            {/* Testimonial Text */}
            <p className="font-nohemi font-normal text-[16px] leading-[140%] text-gray-700">
              "{testimonial.text}"
            </p>

            {/* Name - 20px space from text */}
            <h3 className="font-nohemi font-bold text-[16px] leading-[140%] text-gray-900 mt-5">
              {testimonial.name}
            </h3>

            {/* Role - 5px space from name */}
            <p className="font-nohemi font-normal text-[14px] leading-[140%] text-gray-500 -mt-3">
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
