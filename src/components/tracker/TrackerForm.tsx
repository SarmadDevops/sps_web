import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="relative py-8 md:py-10 lg:py-12 bg-[#0a0e17] text-white overflow-hidden w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Form Box */}
          <div className="p-5 md:p-7 bg-[#0f121c] rounded-2xl shadow-2xl space-y-6">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-left gap-3 mb-4">
                <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
                <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  CONTACT US
                </p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                WE CREATE ONLINE SUCCESS <br />TOGETHER WITH YOU.
              </h1>
            </div>

            {/* Form – super compact */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Name" className="bg-[#111621] border border-[#1f293a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1ca9c9] placeholder-gray-500" />
                <input type="email" placeholder="Email" className="bg-[#111621] border border-[#1f293a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1ca9c9] placeholder-gray-500" />
                <input type="tel" placeholder="Phone" className="bg-[#111621] border border-[#1f293a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1ca9c9] placeholder-gray-500" />
                <div className="relative">
                  <select className="w-full bg-[#111621] border border-[#1f293a] rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#1ca9c9]" defaultValue="">
                    <option value="" disabled>Service</option>
                    <option>Web</option>
                    <option>SEO</option>
                    <option>Marketing</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <textarea placeholder="Message" rows={3} className="w-full bg-[#111621] border border-[#1f293a] rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#1ca9c9] placeholder-gray-500"></textarea>

              <button className="w-full bg-[#1ca9c9] hover:bg-[#178fa9] font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img src="/fromimg.png" alt="Contact" className="w-full max-w-lg ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
