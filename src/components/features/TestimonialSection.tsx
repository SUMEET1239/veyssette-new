"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Jessica M.",
    role: "Private Dinner",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-1-ro2xd3w7xyy5mc9bonzxhy9zvnmgdmdi5jhlxzaw7c.webp",
    review:
      "Every detail felt thoughtfully curated. From the presentation to the flavors, the entire evening was elegant and intimate.",
  },
  {
    name: "Michael A.",
    role: "Private Event Experience",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-2-ro2xbmbf4ewt8kf5diu71tsq0oyj6vgsy6axl7ic20.webp",
    review:
      "Professional, discreet and incredibly talented. Veyssette created a dining experience that impressed every guest at our event.",
  },
  {
    name: "Daniel R.",
    role: "Weekly Meal Prep",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-4-ro2xa5oghowr6ejlww33672wr45z7tnu2xrqppodqg.webp",
    review:
      "The meal prep transformed our routine with quality, beautifully prepared meals and an effortless experience.",
  },
  {
    name: "Olivia T.",
    role: "Special Occasion Dinner",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-3-ro5e1g9h0v0ya179n2os8vihr2yvewra26aqxzzdzc.webp",
    review:
      "Our anniversary dinner was remarkable, akin to a Michelin-star restaurant, with exceptional service and flavors.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#0f0f0f] py-12 md:py-20 lg:py-28 ">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-[35%_65%] gap-8 lg:gap-14 items-start lg:px-[50px]">
          {/* Left Side */}
          <div>
            <p className="mb-4 lg:mb-8 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-[#C9A45A]">
              What Our Clients Say
            </p>

            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] lg:text-[55px] leading-[1.05] text-[#F5E8D0]">
              Experiences That
              <br />
              Speak For
              <br />
              Themselves
            </h2>
          </div>

          {/* Right Side */}
          <div className="min-w-0">
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                className="w-full"
                slidesPerView={1}
                spaceBetween={15}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 35,
                  },
                }}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <div className="w-full flex flex-col min-h-[400px] border border-[#3A2B14] bg-[#13100D] p-8 rounded-sm hover:border-[#C9A45A] transition-all duration-300">
                      {/* Quote */}
                      <div className="text-[55px] md:text-[50px] leading-none text-[#C9A45A]">
                        ❝
                      </div>

                      {/* Review */}
                      <p className="flex-1 mt-2 text-[20px] md:text-[17px] leading-[1.8] text-[#B8AA96] line-clamp-5">
                        {item.review}
                      </p>

                      {/* Divider */}
                      <div className="my-5 h-[2px] w-8 bg-[#C9A45A]" />

                      {/* Author */}
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover w-[60px] h-[60px]"
                        />

                        <h4 className="mt-4 font-serif italic text-[22px] text-[#D4AF5F]">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-[16px] text-[#D4AF5F]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dots */}
              <div className="mt-8 flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-[#D4AF5F]" : "bg-[#4A3920]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
