"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Instagram, Youtube, User, Menu, ShoppingCart, Facebook, Ghost } from "lucide-react";

const HelmetLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="80" height="80" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_101_2)">
      <path d="M39 0C17.46 0 0 17.46 0 39C0 60.54 17.46 78 39 78C60.54 78 78 60.54 78 39C78 17.46 60.54 0 39 0Z" fill="#181818"/>
      <g filter="url(#filter0_d_101_2)">
        <path d="M60.444 46.6667V50.8889C60.444 52.3486 60.0381 53.7744 59.2778 55.006C58.5175 56.2376 57.4357 57.2341 56.1664 57.8929C54.8971 58.5517 53.4932 58.8519 52.0861 58.7679C50.679 58.6839 49.3243 58.2193 48.1778 57.4222L46.3111 56.1333L31.6889 56.1333L29.8222 57.4222C28.6757 58.2193 27.321 58.6839 25.9139 58.7679C24.5068 58.8519 23.1029 58.5517 21.8336 57.8929C20.5643 57.2341 19.4825 56.2376 18.7222 55.006C17.9619 53.7744 17.556 52.3486 17.556 50.8889V46.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60.444 46.6667C60.444 41.5979 55.9392 37.5556 50.2218 37.5556H27.7782C22.0608 37.5556 17.556 41.5979 17.556 46.6667V46.6667C17.556 41.5979 22.0608 37.5556 27.7782 37.5556H50.2218C55.9392 37.5556 60.444 41.5979 60.444 46.6667V46.6667Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60.444 32.2222C56.9667 21.2444 47.9111 19.5 39 19.5C30.0889 19.5 21.0333 21.2444 17.5556 32.2222" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5556 46.6667C17.5556 41.5979 22.0604 37.5556 27.7778 37.5556H50.2222C55.9396 37.5556 60.4444 41.5979 60.4444 46.6667" fill="url(#paint0_linear_101_2)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_d_101_2" x="12.556" y="15.5" width="52.8881" height="52.2676" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.117647 0 0 0 0 0.960784 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_2" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_101_2" x1="17.5556" y1="42.1111" x2="60.4444" y2="42.1111" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8A2BE2"/>
        <stop offset="0.25" stopColor="#4169E1"/>
        <stop offset="0.5" stopColor="#00FFFF"/>
        <stop offset="0.75" stopColor="#32CD32"/>
        <stop offset="1" stopColor="#FFFF00"/>
      </linearGradient>
      <clipPath id="clip0_101_2">
        <rect width="78" height="78" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);


export default function Home() {
  const backgroundSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'>
      <style>
        .fast-text {
          font-family: Anton, sans-serif;
          font-size: 60px;
          fill: rgba(38, 38, 38, 0.8);
          font-weight: bold;
        }
      </style>
      <g transform='rotate(-15 100 100)'>
        <text x='20' y='120' class='fast-text'>ME GO FAST</text>
      </g>
      <g transform='rotate(-15 400 400)'>
        <text x='250' y='420' class='fast-text'>ME GO FAST</text>
      </g>
    </svg>
  `;
  const encodedSvg = encodeURIComponent(backgroundSvg).replace(/'/g, "%27").replace(/"/g, "%22");
  const dataUri = `data:image/svg+xml,${encodedSvg}`;
  
  const navIcons = (
    <>
      <Button variant="ghost" size="icon" className="relative text-white hover:bg-gray-700/80 p-2">
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
      </Button>
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2"><Search className="h-5 w-5" /></Button>
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2"><Instagram className="h-5 w-5" /></Button>
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2"><Youtube className="h-5 w-5" /></Button>
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2"><Facebook className="h-5 w-5" /></Button>
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2"><Ghost className="h-5 w-5" /></Button>
      <Button variant="ghost" className="text-white hover:bg-gray-700/80 p-2 hidden sm:flex items-center gap-2">
        <User className="h-5 w-5" />
        <span className="text-sm font-semibold">Login</span>
      </Button>
    </>
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-body">
      <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center space-x-1">
              {navIcons}
            </div>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-gray-700/80 p-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </Button>
            </div>
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2">
                    <Menu className="h-8 w-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#181818] text-white border-l-gray-800 lg:hidden w-[250px]">
                  <div className="flex flex-col items-start space-y-4 p-4">
                    {navIcons}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%]">
            <HelmetLogo />
        </div>
      </header>
      
      <main 
        className="flex-grow flex flex-col items-center justify-center text-center p-4"
        style={{ backgroundImage: `url("${dataUri}")`, backgroundRepeat: 'repeat' }}
      >
        <div className="relative z-10">
          <h1 className="font-headline text-7xl sm:text-8xl md:text-9xl font-bold uppercase tracking-wide text-white" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)'}}>
            MODCMOTO
          </h1>
          <p className="mt-4 text-lg md:text-xl font-bold tracking-wider text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)'}}>
            GET THE NEW STICKER NOW!<br className="sm:hidden"/> WORLDWIDE SHIPPING!
          </p>
        </div>
      </main>
    </div>
  );
}
