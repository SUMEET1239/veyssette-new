import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#F5E8D0]">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[100px] py-8">
        {/* Top Line */}
        <div className="border-t border-[#8B6B2C]/40 mb-10 md:mb-16"></div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <img
                src="/photos/logo.jpg"
                alt="Veyssette"
                className="w-[180px] md:w-[220px] h-auto"
              />
            </div>

            <p className="text-[#B8AA96] text-[15px] md:text-[16px] leading-[1.8] tracking-[1px] max-w-[400px]">
              Crafting unforgettable private dining experiences through refined
              cuisine, elegant presentation and personalized hospitality.
            </p>
          </div>

          {/* Our Pages */}
          <div>
            <h3 className="text-[#C9A45A] text-xl md:text-2xl font-serif mb-6 md:mb-10">
              Our Pages
            </h3>

            <ul className="space-y-2 text-[16px] md:text-[18px] font-semibold">
              <li>Homepage</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Menu Experience</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C9A45A] text-xl md:text-2xl font-serif mb-6 md:mb-10">
              Services
            </h3>

            <ul className="space-y-2 text-[16px] md:text-[18px] font-semibold">
              <li>Private Dining</li>
              <li>Weekly Meal Prep</li>
              <li>Special Events</li>
              <li>Dietary Needs</li>
              <li>Corporate Dining</li>
              <li>Wine Pairing Experience</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#C9A45A] text-xl md:text-2xl font-serif mb-6 md:mb-10">
              Support
            </h3>

            <div className="space-y-6 text-[14px] text-[#B8AA96]">
              <p className="leading-6">
                18 W 27th Street, New York NY 10001
                <br />— United States
              </p>

              <div className="space-y-2">
                <p>+1 (212) 845 2741</p>
                <p>+1 (646) 903 1187</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 text-[#C9A45A] text-xl md:text-2xl pt-2">
                <FaFacebookF className="cursor-pointer hover:opacity-80 transition" />
                <FaXTwitter className="cursor-pointer hover:opacity-80 transition" />
                <FaYoutube className="cursor-pointer hover:opacity-80 transition" />
                <FaInstagram className="cursor-pointer hover:opacity-80 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#8B6B2C]/40 mt-12 md:mt-16 pt-6 md:pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-[15px] md:text-[17px] font-semibold">
              <a href="#">Careers</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Sitemap</a>
              <a href="#">Terms & Conditions</a>
            </div>

            <p className="text-[#B8AA96] text-[14px] md:text-[15px] text-center">
              Veyssette © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
