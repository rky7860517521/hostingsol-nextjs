//  app/co-location-services/page.tsx
import ColocationServicesContent from "@/components/ColocationContent";
import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("colocation");

export default function ColocationServices() {
  return <ColocationServicesContent />;
}