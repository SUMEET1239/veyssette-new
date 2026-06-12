import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#1A1713] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[120px]">
        <div className="relative overflow-hidden rounded-md border border-[#6B5426] h-[280px] md:h-[320px] lg:h-[380px]">
          {/* Background Image */}
          <Image
            src="/photos/CTA.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
            unoptimized
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-8">
            <h2 className="font-serif text-[#F5E8D0] text-[28px] leading-[1.2] md:text-[42px] lg:text-[50px] max-w-4xl">
              Ready To Enjoy An Unforgettable
              <br className="hidden sm:block" />
              Culinary Experience?
            </h2>

            <button className="mt-6 md:mt-8 lg:mt-12 bg-[#D4AF5F] text-black font-semibold text-base md:text-lg lg:text-xl px-6 py-3 md:px-8 lg:px-10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-[0_0_30px_rgba(201,164,92,0.4)]">
              Book Your Chef
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
