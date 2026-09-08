
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HostingSol - Enterprise Hosting & IT Infrastructure Solutions",
  description: "High-performance cloud and VPS hosting solutions for businesses of all sizes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}    >
         <head> 
           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
              rel="stylesheet"
            />

            <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
            
            <link href="/css/slicknav.min.css" rel="stylesheet" />
            
            <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
            
            <link href="/css/all.min.css" rel="stylesheet" media="screen" />
            
            <link href="/css/animate.css" rel="stylesheet" />
            
            <link rel="stylesheet" href="/css/magnific-popup.css" />
            
            <link rel="stylesheet" href="/css/mousecursor.css" />
            
            {/* <link href="/css/custom.css" rel="stylesheet" media="screen" /> */}



        </head>


      <body className="min-h-full flex flex-col">{children}</body>
      

          <Script src="/js/jquery-3.7.1.min.js" async />
          <Script src="/js/bootstrap.min.js" async />
          <Script src="/js/validator.min.js" async />
          <Script src="/js/jquery.slicknav.js" async />
          <Script src="/js/swiper-bundle.min.js" async />
          <Script src="/js/jquery.waypoints.min.js" async />
          <Script src="/js/jquery.counterup.min.js" async />
          <Script src="/js/jquery.magnific-popup.min.js" async />
          <Script src="/js/SmoothScroll.js" async />
          <Script src="/js/parallaxie.js" async />
          <Script src="/js/gsap.min.js" async />
          <Script src="/js/magiccursor.js" async />
          <Script src="/js/SplitText.js" async />
          <Script src="/js/ScrollTrigger.min.js" async />
          <Script src="/js/jquery.mb.YTPlayer.min.js" async />
          <Script src="/js/wow.min.js" async />
          <Script src="/js/function.js" async />



    </html>
  );
}
