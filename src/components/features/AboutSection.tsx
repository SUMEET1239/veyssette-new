"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutSection() {
  return (
    <section className="bg-[#0f0f0f] py-10">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[100px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#C9A45C] uppercase tracking-[2px] text-xs md:text-sm mb-6 md:mb-8">
              About Us
            </p>

            <h2
              className={`${cormorant.className} text-[#F5E8D0] text-[38px] sm:text-[48px] md:text-[55px] lg:text-[60px] leading-[1.1] font-medium`}
            >
              Passion For Food.
              <br />
              Commitment To You
            </h2>

            <p className="text-[#B8AA96] text-[15px] md:text-[18px] leading-[1.6] mt-6 md:mt-10 max-w-[800px]">
              We believe that every meal is an opportunity to create memorable
              moments. Our mission is to bring people together through
              exceptional cuisine and personalized service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-20 mt-10 lg:mt-14">
              <div>
                <h3
                  className={`${cormorant.className} text-[#C9A45C] text-[40px] lg:text-[50px] leading-none`}
                >
                  10+
                </h3>

                <p
                  className={`${cormorant.className} text-[#D8C8B2] text-[18px] lg:text-[22px] italic`}
                >
                  Years of Experience
                </p>
              </div>

              <div>
                <h3
                  className={`${cormorant.className} text-[#C9A45C] text-[40px] lg:text-[50px] leading-none`}
                >
                  300+
                </h3>

                <p
                  className={`${cormorant.className} text-[#D8C8B2] text-[18px] lg:text-[22px] italic`}
                >
                  Unique Menus
                </p>
              </div>

              <div>
                <h3
                  className={`${cormorant.className} text-[#C9A45C] text-[40px] lg:text-[50px] leading-none`}
                >
                  100+
                </h3>

                <p
                  className={`${cormorant.className} text-[#D8C8B2] text-[18px] lg:text-[22px] italic`}
                >
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 lg:mt-14 bg-[#C9A45C] text-black px-7 md:px-9 py-3 rounded-md font-light text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,164,92,0.4)]">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="overflow-hidden rounded-md border border-[#C9A45C]/30">
                <Image
                  src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_luxury-gourmet-meat-dish-_ubWJi8TQLD-ro1puap9z00q2u945tierihdcqe8jmd0ajmqaprm0w.webp"
                  alt="first"
                  width={600}
                  height={450}
                  className="w-full h-[180px] sm:h-[220px] lg:h-[280px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-md border border-[#C9A45C]/20">
                <Image
                  src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_professional-chef-careful_74f0BVaJAL-ro1psr8srrwt1uho5njf6eh6azzkxh8uex52ze1u80.webp"
                  alt="second"
                  width={600}
                  height={450}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[320px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT TALL IMAGE */}
            <div className="overflow-hidden rounded-md border border-[#C9A45C]/20">
              <Image
                src="/photos/aboutimage.jpg"
                alt="third"
                width={800}
                height={1100}
                className="w-full h-full object-cover min-h-[410px] sm:min-h-[500px] lg:min-h-[610px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
