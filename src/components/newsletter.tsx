"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Get the latest updates on new products and upcoming sales
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <div className="mt-4 text-black font-semibold">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}