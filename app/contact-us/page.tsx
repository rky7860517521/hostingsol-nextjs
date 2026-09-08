//  app/contact-us/page.tsx 
import ContactUsContent from "@/components/ContactContent";
import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("contact");
export default function ContactUs() {
   

  return  <ContactUsContent />;
}