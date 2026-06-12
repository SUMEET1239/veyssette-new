import Image from "next/image";
const features = [
  {
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/2026/05/menu.webp",
    title: "Custom\nMenus",
    desc: "Tailored to your tastes, dietary needs and lifestyle.",
  },
  {
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/2026/05/pestle.webp",
    title: "Premium\nIngredients",
    desc: "We use fresh, seasonal and high-quality ingredients.",
  },
  {
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/2026/05/best-property.webp",
    title: "In-Home\nExperience",
    desc: "Relax and enjoy as we prepare your kitchen.",
  },
  {
    icon: "https://templateup.site/veyssette/wp-content/uploads/sites/96/2026/05/star.webp",
    title: "Impeccable\nService",
    desc: "Professional, discreet and dedicated to every detail.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0f0f0f] py-16 lg:py-24 overflow-hidden">
      <div className="bg-[#1A1713] w-[180%] -ml-[40%] lg:w-[140%] lg:-ml-[20%] rounded-[40%] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 lg:px-[450px]">
          {features.map((item, index) => {
            return (
              <div
                key={index}
                className={`
              text-center
              py-8 lg:py-0
              px-4 lg:px-10
              ${
                index !== features.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#C9A45C]/25"
                  : ""
              }
            `}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={50}
                  className="mx-auto mb-6 lg:mb-8 w-12 h-12 lg:w-[60px] lg:h-[50px]"
                />

                <h3
                  className="
                text-[#F5E8D0]
                text-[20px]
                lg:text-[22px]
                leading-6
              "
                >
                  {item.title.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </h3>

                <p
                  className="
                mt-4 lg:mt-8
                text-[#B8AA96]
                text-[14px]
                lg:text-[16px]
                leading-6
              "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
