import { Cormorant_Garamond } from "next/font/google";
import FeaturesSection from "../features/FeatureSection";
import AboutSection from "../features/AboutSection";
import ServicesSection from "../features/ServiceSection";
import CTASection from "../features/CTAsection";
import TestimonialsSection from "../features/TestimonialSection";
import HowItWorksSection from "../features/HowItworks";
import FeaturedMenu from "../features/FeaturedMenu";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function HomePage() {
  return (
    <>
      <section className="min-h-screen pt-4 bg-[#0f0f0f] text-white">
        <div className="px-5 md:px-10 lg:px-[100px]">
          <div className="grid lg:grid-cols-2 min-h-screen items-center mt-[60px] md:mt-[80px] gap-10 lg:gap-[10px]">
            <div>
              <p className="text-[#d4af37] uppercase tracking-[2px] mb-4 md:mb-6 text-sm md:text-base">
                Luxury Personal Chef Experience
              </p>

              <h1
                className={`${cormorant.className} text-[#F5E8D0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight lg:leading-none`}
              >
                Elevated Dining,
                <br /> Crafted Around You
              </h1>

              <p className="text-[#B8AA96] mt-5 md:mt-6 max-w-lg tracking-[1px] md:tracking-[2px] text-sm md:text-base">
                Experience restaurant-quality cuisine in the comfort of your
                home with personalized menus, seasonal ingredients, and
                unforgettable culinary moments tailored to your lifestyle.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                <button className="bg-[#C9A45C] text-black font-semibold px-6 py-4 rounded-lg text-base md:text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Book A Private Experience
                </button>

                <button className="border border-[#C9A45C] text-[#F5E8D0] font-semibold px-6 py-4 rounded-lg text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:text-[#d4af37] w-full sm:w-auto">
                  Explore Our Services
                </button>
              </div>

              <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                <div>
                  <p className="text-[#B8AA96] mb-4 text-base md:text-lg">
                    Trusted by clients in
                  </p>

                  <div className="flex">
                    <img
                      src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-4-ro2xa5oghowr6ejlww33672wr45z7tnu2xrqppodqg.webp"
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black"
                    />

                    <img
                      src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-3-ro5e1g9h0v0ya179n2os8vihr2yvewra26aqxzzdzc.webp"
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black -ml-3"
                    />

                    <img
                      src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-1-ro2xd3w7xyy5mc9bonzxhy9zvnmgdmdi5jhlxzaw7c.webp"
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black -ml-3"
                    />

                    <img
                      src="https://templateup.site/veyssette/wp-content/uploads/sites/96/elementor/thumbs/avatar-2-ro2xbmbf4ewt8kf5diu71tsq0oyj6vgsy6axl7ic20.webp"
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black -ml-3"
                    />
                  </div>
                </div>

                <div className="hidden sm:block h-20 md:h-28 w-px bg-[#C9A45C]/40" />

                <div>
                  <h3
                    className={`${cormorant.className} text-[#C9A45C] text-3xl md:text-4xl`}
                  >
                    100+
                  </h3>

                  <p
                    className={`${cormorant.className} text-[#F5E8D0] text-2xl md:text-3xl italic`}
                  >
                    Happy clients
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[450px] sm:h-[600px] md:h-[800px] lg:h-[110vh] overflow-hidden border border-[#D4AF37]/30">
              <img
                src="/photos/chef.jpg"
                alt="Private Chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <FeaturedMenu />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
