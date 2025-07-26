import Contact from "@/components/contact";
import Download from "@/components/download";
import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import WhatWeDo from "@/components/whatWeDo";
import WhoWeAre from "@/components/whoweare";

export default function Home() {
  return <div>
    <Hero/>
    <WhoWeAre/>
    <WhatWeDo/>
    <Solutions/>
    <Contact/>
    <Download/>
  </div>;
}
