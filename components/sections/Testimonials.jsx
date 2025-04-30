export default function TestimonialSection() {
  const testimonials = [
    {
      text: "Working with the team was very seamless and their attention to detail and professional suggestions helped in the smooth success of the 2025 edition of the conference. Looking forward to 2026!",
      name: "Kenny .O",
      role: "Co-Founder at The ITL Netowrks",
    },
    // {
    //   text: "I needed a quick website for my book launch, a place to upload my articles and also facilitate sales. The team Hokage was able to deliver a simple yet elegant website in 2 weeks + Design and a Custom Dashboard. Impressive!",
    //   name: "Barrister (Mrs) Mfon Usoro",
    //   role: "Author, Mfon Usoro Books",
    // },
    {
      text: "Last year in December 2024, I reached out to the team to help register mt business on google and also help with the design of my business logo & brand identity. Party Deal has had over 150 views and a few of them reaching out through that medium since then. I was also impressed with the quality of work and the speed at which they delivered.",
      name: "Party Deal Ng",
      role: "Head Chef",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-4 md:px-8 lg:px-16 pt-16" id="testimonials-section">
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
