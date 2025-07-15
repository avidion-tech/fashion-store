import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">AUREL</h3>
            <p className="text-gray-400">
              Premium fashion for the modern individual. Crafted with attention
              to detail and designed for lasting style.
            </p>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-medium tracking-wide">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  Contact Us
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  Size Guide
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  Shipping & Returns
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  FAQ
                </div>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 ">
            <h4 className="font-medium tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  About Us
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  Careers
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-white transition-colors">
                  Sustainability
                </div>
              </li>
              <li>
                <div className="hover:text-white transition-colors">Press</div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium tracking-wide">NEWSLETTER</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="placeholder:text-sm px-2 md:px-3 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <button className="text-xs md:text-sm px-2 md:px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AUREL. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="cursor-pointer text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </div>
            <div className="cursor-pointer text-gray-400 hover:text-white text-sm">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
