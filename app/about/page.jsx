import React from "react";

const AboutUs = () => {
  return (
    <main className="w-full flex flex-col items-center bg-[#F9F9F9]">
      {/* Banner Section */}
      <section className="relative w-full h-[400px] lg:h-[600px] bg-[url('/path/to/banner-image.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-white text-5xl lg:text-7xl font-vastago font-bold">
          About Us
        </h1>
      </section>

      {/* About Content Container */}
      <section className="w-full max-w-[1440px] px-6 lg:px-[240px] py-20 lg:py-28 flex flex-col items-center gap-12">
        
        {/* First Paragraph Container */}
        <div className="w-full max-w-[960px] h-auto lg:h-[309px] px-4 lg:px-16 py-6 bg-white shadow-lg rounded-2xl flex flex-col items-center gap-4">
          <img
            src="/path/to/paragraph-image-1.jpg"
            alt="Creative Workspace"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <p className="text-gray-800 font-vastago font-medium text-xl lg:text-2xl text-center leading-[116%] tracking-[-0.04em]">
            At Hokage, we specialize in crafting next-gen web experiences that blend creativity with cutting-edge technology.
            We deliver tailored solutions for upgrading your site or creating a new digital platform.
          </p>
        </div>

        {/* Second Paragraph Container */}
        <div className="w-full max-w-[960px] h-auto lg:h-[440px] px-4 lg:px-16 py-6 bg-white shadow-lg rounded-2xl flex flex-col gap-8">
          <p className="text-gray-700 font-vastago font-normal text-xl lg:text-2xl leading-[140%] tracking-[-0.01em]">
            Since the inception of our company, we have been instrumental in aiding our clients to discover outstanding solutions for their businesses, forging unforgettable brands and digital offerings.
          </p>
          <p className="text-gray-700 font-vastago font-normal text-xl lg:text-2xl leading-[140%] tracking-[-0.01em]">
            With each passing year, our expertise deepens, allowing our accumulated knowledge to guide us in crafting products precisely as they are meant to be.
          </p>
        </div>

        {/* Double Image Container */}
        <div className="w-full max-w-[724px] h-auto flex gap-6 justify-center">
          <div className="relative w-[352px] h-[388px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/path/to/office-image-1.jpg"
              alt="Modern Office Space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-[352px] h-[388px] rounded-3xl overflow-hidden shadow-lg mt-12">
            <img
              src="/path/to/office-image-2.jpg"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="w-full max-w-[1088px] mt-12 lg:mt-16 flex flex-col items-center bg-green-500 text-white rounded-3xl p-8">
          <h3 className="text-3xl lg:text-4xl font-vastago font-semibold">
            Have a project in mind? Let’s get to work
          </h3>
          <button className="mt-4 px-6 py-3 bg-white text-green-600 font-nohemi font-medium rounded-full hover:bg-gray-100 transition">
            Book a call ↗
          </button>
        </div> */}
      </section>
    </main>
  );
};

export default AboutUs;