// app/it-rental-services/page.tsx
import ITRentalContent from "@/components/ItrentalContent";
import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("it-rental");

export default function ITRental() {
  return <ITRentalContent />;
}