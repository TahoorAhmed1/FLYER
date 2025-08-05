import Contactus from "@/components/contact";
import ContactForm from "@/components/contact-from";
import Download from "@/components/download";
import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="ContactUsImage flex justify-center items-center flex-col gap-10 mb-10 ">
        <div>
          <h2 className="font-semibold text-white text-7xl text-center mb-2  ">
            We’d love to hear from you!
          </h2>
          <p className="text-center text-[24px] text-white">
            Have a question? Just write us a message and we will get <br />
            back to you shortly
          </p>
        </div>
        <div className="max-w-[580px] w-full -mb-40 z-10">
          <ContactForm />
        </div>
      </div>

      <div className="space-y-8 grid grid-cols-3 mt-32 container">
        <div className="flex  items-start gap-4">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-7 h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-2xl lg:text-[30px] text-black">
              Our Locations
            </h2>
            <p className="text-base lg:text-[18px] text-gray-700">
              1234 Elm Street, Suite 567, Springfield, IL 62701, United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-7 h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-2xl lg:text-[30px] text-black">Mail us</h2>
            <p className="text-base lg:text-[18px] text-gray-700">
              sales@flyerhive.com <br /> support@flyerhive.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-7 h-7 text-black" />
          </div>
          <div className="font-semibold flex-grow">
            <h2 className="text-2xl lg:text-[30px] text-black">
              Opening Hours
            </h2>
            <p className="text-base lg:text-[18px] text-gray-700">
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
