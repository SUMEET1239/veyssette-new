import Image from "next/image";

const menus = [
  {
    title: "Seared Filet Mignon",
    price: "$20",
    description:
      "Truffle potato puree, roasted vegetables and red wine reduction.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp",
  },
  {
    title: "Burrata & Heirloom Tomatoes",
    price: "$9",
    description: "Fresh basil, aged balsamic glaze and artisan olive oil.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
  },
  {
    title: "Herb-Crusted Salmon",
    price: "$18",
    description: "Seasonal greens, citrus beurre blanc and grilled asparagus.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
  },
  {
    title: "Dark Chocolate Mousse",
    price: "$12",
    description: "Hazelnut crumble, vanilla cream and gold leaf finish.",
    image:
      "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/magnific_centered-dark-chocolate-m_ubWJyChQLD-e1780268112175-roaeollqhzcgs90ktlguhbtsn3s0k8t0hrqzafp7d4.webp",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="bg-[#1A1713] py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left Sticky Content */}
          <div className="lg:w-[45%]">
            <div className="lg:sticky lg:top-24">
              <p className="mb-4 lg:mb-6 text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#c8a45c]">
                Featured Menus
              </p>

              <h2 className="mb-6 lg:mb-8 text-4xl md:text-4xl lg:text-5xl font-light leading-tight text-[#f5ede1]">
                A Taste Of What We Create
              </h2>

              <p className="mb-8 lg:mb-10 max-w-xl text-[15px] md:text-lg leading-7 text-[#b7b0a7]">
                Experience thoughtfully curated dishes crafted with seasonal
                ingredients, refined techniques and unforgettable presentation
                designed for intimate luxury dining.
              </p>

              <button className="rounded-lg bg-[#c8a45c] px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,164,92,0.4)] hover:opacity-90">
                See Full Menu
              </button>
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="lg:w-[55%]">
            {menus.map((item, index) => (
              <div
                key={index}
                className="mb-12 md:mb-16 lg:mb-32 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-10"
              >
                {/* Image */}
                <div className="relative h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[350px] lg:w-[350px] overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-2">
                    <h3 className="text-[24px] lg:text-3xl font-light text-[#f5ede1]">
                      {item.title}
                    </h3>

                    <div className="hidden lg:block flex-1 border-b border-dotted border-[#8f7b5d]" />

                    <span className="text-[22px] lg:text-3xl text-[#c8a45c]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-4 lg:mt-5 text-[15px] lg:text-[19px] leading-7 text-[#b7b0a7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
