// app/page.tsx  == homepage
import HomeContent from "@/components/HomeContent";  
import { generateMetadata } from "./lib/metadata";

export const metadata = generateMetadata("home");

export default function Page() {
  return <HomeContent />;
}
