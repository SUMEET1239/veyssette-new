import Image from "next/image";

const services = [
  {
    title: "Private Dinners",
    description:
      "Intimate and exclusive dinners prepared just for you and your guests.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_elegant-candlelit-private_LU8ABU1swO-ro5e2gxcioblj2htrctpf6z8y9nq87xutq71bxa89k.webp",
  },
  {
    title: "Weekly Meal Prep",
    description:
      "Healthy, personalized meals prepared weekly to save time and meet needs.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_luxury-gourmet-prepared-m_WMgCsI7cXe-ro1qb09zgyvo0on08yv6k6ud5hky40q1brnneugod4.webp",
  },
  {
    title: "Special Events",
    description: "Custom menus for birthdays and special celebrations.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_elegant-group-of-guests-r_vuAgZlia47-ro5e26l4fhxfzcwufqct5rl6f12ovjst4b0p1vpk60.webp",
  },
  {
    title: "Dietary Needs",
    description:
      "Menus adapted to dietary restrictions and specific preferences.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_overhead-view-of-a-curate_Vd7FUKVMMU-1-e1780267900616-roaej2c4cdo535tu7jmerstuqkrqpiyyovwe7wpv14.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1A1713] text-[#F5E8D0] py-16 lg:py-24">
      <div className="max-w-[1590px] mx-auto px-5 md:px-10 lg:px-[120px]">
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
          <div>
            <p className="text-[#C9A45A] uppercase tracking-[2px] text-xs md:text-sm font-semibold mb-4 lg:mb-6">
              Our Services
            </p>

            <h2 className="font-serif text-4xl md:text-5xl max-w-[700px] leading-tight">
              Culinary Experiences Made For You
            </h2>
          </div>

          <div>
            <p className="text-[#B8AA96] text-[15px] md:text-[18px] leading-[1.7] max-w-[650px]">
              From intimate dinners to special celebrations, we offer a variety
              of services designed to make every occasion unique and
              stress-free. Our goal is to ensure that each event is a memorable
              experience filled with joy.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-md border border-[#6B5426]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={250}
                  className="w-full h-auto object-cover transition duration-500 hover:scale-105"
                  unoptimized
                />
              </div>

              <h3 className="font-serif text-[22px] lg:text-[24px] mt-6 lg:mt-8 mb-3 lg:mb-4">
                {service.title}
              </h3>

              <p className="text-[#B8AA96] text-[15px] lg:text-[17px] leading-7 lg:leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <button className="bg-[#D4AF5F] text-black font-light px-8 lg:px-10 py-3 rounded-lg text-base md:text-lg lg:text-xl hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,164,92,0.4)]">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
