import { WhoWe } from "@/assets";
import Image from "next/image";
import React from "react";
import { Target, BarChart3, TrendingUp, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";

function WhoWeAre() {
  const stats = [
    { value: "8+", label: "Years of Experience", icon: Clock },
    { value: "500+", label: "Retailers Served", icon: Users },
    { value: "10M+", label: "Products Analyzed", icon: BarChart3 },
    { value: "95%", label: "Client Satisfaction", icon: Award },
  ];

  const features = [
    "Data-driven promotional strategies",
    "Advanced Business Intelligence tools",
    "Historical data analysis",
    "Real-time market insights",
    "Competitive intelligence",
    "ROI optimization"
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Empowering retailers and brands with cutting-edge data science and business intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4 sm:p-6 lg:p-8 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={WhoWe}
                  alt="Who We Are - FlyerHive Team"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Growth Rate</p>
                    <p className="text-xl font-bold text-gray-900">156%</p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Trusted By</p>
                    <p className="text-xl font-bold text-gray-900">500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transforming Retail with{" "}
                <span className="text-primary">Data Science</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                FlyerHive provides cutting-edge Business Intelligence (BI) tools to
                help retailers and brands optimize promotional strategies using data
                science. With over 8 years of historical data, we empower businesses
                to make informed decisions and drive smarter growth.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="group bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl">
                Contact Sales
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 bg-primary/20 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 500+ retailers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-md p-3 mb-2 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-primary mx-auto" />
              </div>
              <p className="text-xs text-gray-600">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;