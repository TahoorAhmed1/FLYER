import { MapPin, Mail, Clock } from "lucide-react";
import ContactForm from "./contact-from";

function Contactus() {
  return (
    <div className="contactOverlay my-20">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-bold text-5xl lg:text-[60px] mb-3 text-black">
                Contact Us
              </h2>
              <p className="text-lg lg:text-[22px] font-medium text-gray-700">
                Drop us a line, we’d love to hear from you
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-black" />
              </div>
              <div className="font-semibold flex-grow">
                <h2 className="text-2xl lg:text-[30px] text-black">
                  Our Locations
                </h2>
                <p className="text-base lg:text-[18px] text-gray-700">
                  1234 Elm Street, Suite 567, Springfield, IL 62701, United
                  States
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

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
