// vps-server/page.tsx
 
import VpsContent from "@/components/VpsContent";
import { generateMetadata } from "../lib/metadata";
 
export const metadata = generateMetadata("vps");

export default function VPSHosting() {
 

  return <VpsContent />
    

}