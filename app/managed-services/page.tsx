// app/managed-services/page.tsx
 
import ManagedServicesContent from "@/components/ManagedContent";
import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("managed-services");
export default function ManagedServices() {
  return <ManagedServicesContent />;
}