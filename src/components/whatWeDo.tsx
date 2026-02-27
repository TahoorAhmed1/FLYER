import { WhatWe } from "@/assets";
import Image from "next/image";
import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Smartphone, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  LineChart,
  PieChart
} from "lucide-react";

function WhatWeDo() {
  const features = [
    {
      icon: BarChart3,
      title: "Track Promotions",
      description: "Real-time tracking of promotional campaigns"
    },
    {
      icon: TrendingUp,
      title: "Competitor Analysis",
      description: "Analyze competitor strategies and market position"
    },
    {
      icon: Target,
      title: "Refine Strategies",
      description: "Data-driven insights for maximum ROI"
    },
    {
      icon: Users,
      title: "Consumer Behavior",
      description: "Understand your audience with real-time analytics"
    }
  ];

  const industries = [
    "Electronics",
    "Grocery",
    "Health & Beauty",
    "Fashion",
    "Home & Living",
    "Sports"
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            What <span className="text-primary">We Do</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Empowering retailers with cutting-edge BI tools and real-time insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  SaaS Cloud-Based BI Tools
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our SaaS Cloud-based BI tools allow retailers and brands to track
                promotions, analyze competitor data, and refine strategies for
                maximum sales impact. We offer real-time insights into consumer
                behavior, improving your Return on Promotion investment across
                various industries.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Industries We Serve */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Industries We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary hover:text-black transition-colors cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-primary/5 rounded-xl p-3 mb-2">
                  <span className="text-2xl font-bold text-primary">10M+</span>
                </div>
                <p className="text-xs text-gray-600">Products Analyzed</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/5 rounded-xl p-3 mb-2">
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <p className="text-xs text-gray-600">Active Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/5 rounded-xl p-3 mb-2">
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <p className="text-xs text-gray-600">ROI Improvement</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/5 rounded-xl p-3 mb-2">
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <p className="text-xs text-gray-600">Real-time Insights</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Learn More About Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-2 lg:order-2">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4 sm:p-6 lg:p-8 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={WhatWe}
                  alt="What We Do - FlyerHive BI Tools"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ROI Increase</p>
                    <p className="text-xl font-bold text-gray-900">+156%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Users</p>
                    <p className="text-xl font-bold text-gray-900">50K+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-md p-2 mb-1 border border-gray-100">
                  <CheckCircle className="w-4 h-4 text-primary mx-auto" />
                </div>
                <p className="text-xs text-gray-600">Real-time</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-md p-2 mb-1 border border-gray-100">
                  <CheckCircle className="w-4 h-4 text-primary mx-auto" />
                </div>
                <p className="text-xs text-gray-600">Cloud-based</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-md p-2 mb-1 border border-gray-100">
                  <CheckCircle className="w-4 h-4 text-primary mx-auto" />
                </div>
                <p className="text-xs text-gray-600">AI-powered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Data Analytics", value: "Real-time" },
            { label: "Competitor Tracking", value: "Automated" },
            { label: "ROI Optimization", value: "AI-driven" },
            { label: "Market Insights", value: "24/7" }
          ].map((item, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-lg font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;