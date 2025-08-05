import Contactus from "@/components/contact";
import ContactForm from "@/components/contact-from";
import Download from "@/components/download";
import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Contactus />
      <Download />
    </div>
  );
}

export default page;
