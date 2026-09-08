// app/dedicated-server/page.tsx
// "use client";
 
import DedicatedHostingContent from "@/components/DedicatedContent";
import { generateMetadata } from "../lib/metadata";
export const metadata = generateMetadata("dedicated");

export default function DedicatedHosting() {

  

  return <DedicatedHostingContent />;
}