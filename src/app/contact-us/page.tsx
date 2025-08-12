import Contactus from "@/components/contact";
import ContactForm from "@/components/contact-from";
import Download from "@/components/download";
import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      {/* Hero */}
      <div className="ContactUsImage flex justify-center items-center flex-col gap-6 sm:gap-8 lg:gap-10 mb-10 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-semibold text-white text-3xl sm:text-5xl lg:text-7xl mb-2">
            We’d love to hear from you!
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-[24px] text-white">
            Have a question? Just write us a message and we will get{" "}
            <br className="hidden sm:block" />
            back to you shortly
          </p>
        </div>

        <div className="w-full max-w-[580px] px-3 sm:px-0 -mb-6 sm:-mb-24 lg:-mb-40 z-10">
          <ContactForm />
        </div>
      </div>

      {/* Info cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <div className="bg-primary w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-xl sm:text-2xl lg:text-[30px] text-black">
              Our Locations
            </h2>
            <p className="text-sm sm:text-base lg:text-[18px] text-gray-700">
              1234 Elm Street, Suite 567, Springfield, IL 62701, United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-xl sm:text-2xl lg:text-[30px] text-black">
              Mail us
            </h2>
            <p className="text-sm sm:text-base lg:text-[18px] text-gray-700">
              sales@flyerhive.com <br /> support@flyerhive.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4">
          <div className="bg-primary w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-xl sm:text-2xl lg:text-[30px] text-black">
              Opening Hours
            </h2>
            <p className="text-sm sm:text-base lg:text-[18px] text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday: 10:00 AM -
              4:00 PM <br /> Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <Download />
    </div>
  );
}

export default page;
