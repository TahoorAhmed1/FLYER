import { MapPin, Mail, Clock, Phone, Send, MessageSquare } from "lucide-react";
import ContactForm from "./contact-from";

function Contactus() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-1">+1 (800) 123-4567</p>
                <p className="text-gray-600">+1 (800) 765-4321</p>
                <p className="text-xs text-gray-500 mt-2">Mon-Fri, 9am-6pm</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-1">sales@flyerhive.com</p>
                <p className="text-gray-600">support@flyerhive.com</p>
                <p className="text-xs text-gray-500 mt-2">24/7 Support</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 text-lg">
                    1234 Elm Street, Suite 567<br />
                    Springfield, IL 62701<br />
                    United States
                  </p>
                  
                  {/* Map Button */}
                  <button className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Get Directions
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Opening Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Monday - Friday</span>
                      <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Saturday</span>
                      <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sunday</span>
                      <span className="text-red-500 font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-primary rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-primary rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-primary rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <ContactForm />

            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Typically replies within 1-2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;