import Image from "next/image";

const steps = [
  {
    number: "01.",
    title: "Book",
    description: "Choose your date and tell us about your preferences.",
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/1r-roaadwbzolkjynq9684blv7oz4a8plne82f2tz2tfs.webp",
  },
  {
    number: "02.",
    title: "Plan",
    description: "We create a custom menu just for you.",
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/2r-roaadve5hrj9n1rmbppp1dg8dqevhwjnvxrlcp47m0.webp",
  },
  {
    number: "03.",
    title: "Cook",
    description: "We cook in your kitchen while you relax.",
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/3r-roaadugbaxhzbfszh7b2gvorscjia7fxjt43vf5ls8.webp",
  },
  {
    number: "04.",
    title: "Enjoy",
    description: "Savor every bite and we handle the cleanup.",
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/4r-roaadugbaxhzbfszh7b2gvorscjia7fxjt43vf5ls8.webp",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0f0f0f] py-16 lg:py-32">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[150px]">
        {/* Top */}
        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] md:w-[110px]">
            <Image
              src="https://templateup.site/veyssette/wp-content/uploads/sites/96/2026/05/divider.webp"
              alt="divider"
              width={110}
              height={40}
              unoptimized
              className="w-full h-auto"
            />
          </div>

          <p className="mt-4 text-[#C9A45A] uppercase tracking-[2px] text-xs md:text-sm font-semibold">
            How It Works
          </p>

          <h2 className="mt-6 lg:mt-8 font-serif text-[#F5E8D0] text-[36px] sm:text-[45px] lg:text-[55px] leading-tight lg:leading-none">
            Simple, Personal & Seamless
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 lg:mt-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line */}
              {index !== 3 && (
                <div className="hidden xl:block absolute top-[55px] left-[70%] w-[70%] h-px bg-[#3A2B14]" />
              )}

              {/* Icon */}
              <div className="flex justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={85}
                  height={85}
                  className="object-contain w-[70px] h-[70px] lg:w-[85px] lg:h-[85px]"
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 lg:mt-10 font-serif text-[#F5E8D0] text-[20px] lg:text-[22px]">
                <span className="mr-2">{step.number}</span>
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 lg:mt-5 text-[#B8AA96] text-[15px] lg:text-[18px] leading-[1.6] max-w-[320px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
