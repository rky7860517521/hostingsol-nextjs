// about-us/page.tsx

import AboutContent from "@/components/AboutContent";

import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("about");

export default function AboutUs() {
 
   
      return <AboutContent />;
    
  
}