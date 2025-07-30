function ContactForm() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 placeholder-gray-500"
              aria-label="Full Name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 placeholder-gray-500"
              aria-label="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 placeholder-gray-500"
              aria-label="Phone Number"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 placeholder-gray-500 resize-none"
              aria-label="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary text-black font-semibold py-4 rounded-xl transition-colors duration-200 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
