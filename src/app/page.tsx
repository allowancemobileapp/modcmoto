
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Instagram, Youtube, User, Menu, ShoppingCart, Facebook, Ghost, Share, ArrowUp, AlertCircle } from "lucide-react";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


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

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" {...props}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.16-4.2-1.84-6.45.32-2.25 1.51-4.14 3.53-5.37 2.02-1.22 4.47-1.48 6.66-.78.03 1.46-.02 2.93-.02 4.39-.93-.46-1.93-.67-2.93-.7-1.02-.03-2.04.19-2.98.69-.94.5-1.68 1.28-2.13 2.23-.45.95-.64 2.04-.53 3.13.11 1.09.49 2.16 1.17 3.03.68.87 1.64 1.48 2.73 1.72 1.09.24 2.25.18 3.3-.16.94-.3 1.78-.86 2.44-1.64.66-.78 1.1-1.76 1.28-2.82.02-3.17.01-6.34.01-9.51Z"/></svg>
);


export default function Home() {
  const [stickerApi, setStickerApi] = React.useState<CarouselApi>()
  const [stickerCurrent, setStickerCurrent] = React.useState(0)
  const [stickerCount, setStickerCount] = React.useState(0)
  
  const [hoodieApi, setHoodieApi] = React.useState<CarouselApi>()
  const [hoodieCurrent, setHoodieCurrent] = React.useState(0)
  const [hoodieCount, setHoodieCount] = React.useState(0)

  const stickers = [
    { name: 'PFP STICKER', src: 'https://placehold.co/400x400.png', hint: 'helmet sticker' },
    { name: 'MINI-MOD QUESTION STICKER', src: 'https://placehold.co/400x400.png', hint: 'cute question sticker' },
    { name: 'MINI-MOD HAPPY STICKER', src: 'https://placehold.co/400x400.png', hint: 'happy cute sticker' },
    { name: 'Sticker 4', src: 'https://placehold.co/400x400.png', hint: 'moto sticker' },
    { name: 'Sticker 5', src: 'https://placehold.co/400x400.png', hint: 'race sticker' },
    { name: 'Sticker 6', src: 'https://placehold.co/400x400.png', hint: 'bike sticker' },
    { name: 'Sticker 7', src: 'https://placehold.co/400x400.png', hint: 'cool sticker' },
    { name: 'Sticker 8', src: 'https://placehold.co/400x400.png', hint: 'awesome sticker' },
    { name: 'Sticker 9', src: 'https://placehold.co/400x400.png', hint: 'fast sticker' },
  ];
  
  const hoodies = [
    { name: '[WHITE] CRAZY SPEED HOODIE', src: 'https://placehold.co/400x500.png', hint: 'white hoodie motorcycle' },
    { name: '[SIMPLE] ME GO FAST HOODIE', src: 'https://placehold.co/400x500.png', hint: 'black hoodie simple' },
    { name: 'WOMP WOMP HOODIE', src: 'https://placehold.co/400x500.png', hint: 'black hoodie funny' },
    { name: 'Hoodie 4', src: 'https://placehold.co/400x500.png', hint: 'moto hoodie' },
    { name: 'Hoodie 5', src: 'https://placehold.co/400x500.png', hint: 'race hoodie' },
    { name: 'Hoodie 6', src: 'https://placehold.co/400x500.png', hint: 'bike hoodie' },
  ];

  const footerSocials = [
    { name: "Instagram", icon: Instagram, color: "bg-[#d62976]", textColor: "text-white", href: "#" },
    { name: "Youtube", icon: Youtube, color: "bg-[#FF0000]", textColor: "text-white", href: "#" },
    { name: "Tiktok", icon: TiktokIcon, color: "bg-black", textColor: "text-white", href: "#" },
    { name: "Facebook", icon: Facebook, color: "bg-[#3b5998]", textColor: "text-white", href: "#" },
    { name: "Snapchat", icon: Ghost, color: "bg-yellow-400", textColor: "text-black", href: "#" },
  ];

  useEffect(() => {
    if (!stickerApi) {
      return
    }
    setStickerCount(stickerApi.scrollSnapList().length)
    setStickerCurrent(stickerApi.selectedScrollSnap())

    stickerApi.on("select", () => {
      setStickerCurrent(stickerApi.selectedScrollSnap())
    })
  }, [stickerApi])
  
  useEffect(() => {
    if (!hoodieApi) {
      return
    }
    setHoodieCount(hoodieApi.scrollSnapList().length)
    setHoodieCurrent(hoodieApi.selectedScrollSnap())

    hoodieApi.on("select", () => {
      setHoodieCurrent(hoodieApi.selectedScrollSnap())
    })
  }, [hoodieApi])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      <Button variant="ghost" className="text-white hover:bg-gray-700/80 p-2 flex items-center gap-2">
        <User className="h-5 w-5" />
        <span className="text-sm font-semibold">Login</span>
      </Button>
    </>
  );

  return (
    <div 
      className="bg-black text-white min-h-screen flex flex-col font-body"
      style={{ backgroundImage: `url("/me-go-fast-bg.png")`, backgroundRepeat: 'repeat' }}
    >
      <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="hidden lg:flex items-center space-x-1">
              {navIcons}
            </div>
            
            <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2">
                      <Menu className="h-8 w-8" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="bg-[#181818] text-white border-r-gray-800 w-[250px]">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col items-start space-y-4 p-4">
                      {navIcons}
                    </div>
                  </SheetContent>
                </Sheet>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <HelmetLogo />
            </div>

            <div className="hidden lg:block w-8" />
             <div className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2">
                  <ShoppingCart className="h-8 w-8" />
                </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 min-h-screen">
        <div className="relative z-10">
          <h1 className="font-headline text-7xl sm:text-8xl md:text-9xl font-bold uppercase tracking-wide text-white" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)'}}>
            MODCMOTO
          </h1>
          <p className="mt-4 text-lg md:text-xl font-bold tracking-wider text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)'}}>
            GET THE NEW STICKER NOW!<br className="sm:hidden"/> WORLDWIDE SHIPPING!
          </p>
        </div>
      </main>

      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://placehold.co/1920x800.png')",
        }}
        data-ai-hint="motorsport background"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Button className="relative z-10 font-headline bg-white text-black hover:bg-gray-200 px-10 py-5 text-xl md:px-12 md:py-6 md:text-2xl tracking-wider shadow-lg">
          SHOP NOW
        </Button>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-3 px-4 rounded-lg text-sm uppercase flex items-center justify-center gap-2">
                <Instagram className="h-5 w-5" />
                Instagram
            </Button>
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-3 px-4 rounded-lg text-sm uppercase flex items-center justify-center gap-2">
                <Youtube className="h-5 w-5" />
                Youtube
            </Button>
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-3 px-4 rounded-lg text-sm uppercase flex items-center justify-center gap-2">
                <Share className="h-5 w-5" />
                Tiktok
            </Button>
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-3 px-4 rounded-lg text-sm uppercase flex items-center justify-center gap-2">
                <Facebook className="h-5 w-5" />
                Facebook
            </Button>
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-3 px-4 rounded-lg text-sm uppercase flex items-center justify-center gap-2 sm:col-span-2 md:col-span-1">
                <Ghost className="h-5 w-5" />
                Snapchat
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stickers" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-transparent border border-zinc-700 rounded-none p-0 h-auto">
                <TabsTrigger value="stickers" className="text-white data-[state=active]:bg-zinc-200 data-[state=active]:text-black rounded-none font-bold uppercase tracking-wider px-10 py-3 text-sm transition-none">
                  Stickers
                </TabsTrigger>
                <TabsTrigger value="posters" className="text-white data-[state=active]:bg-zinc-200 data-[state=active]:text-black rounded-none font-bold uppercase tracking-wider px-10 py-3 text-sm border-l border-zinc-700 transition-none">
                  Posters
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="stickers">
              <Carousel setApi={setStickerApi} opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {stickers.map((sticker, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <div className="flex flex-col h-full">
                          <div className="bg-white p-4 flex-grow flex items-center justify-center aspect-square">
                            <Image
                              src={sticker.src}
                              alt={sticker.name}
                              width={400}
                              height={400}
                              className="object-contain max-h-full"
                              data-ai-hint={sticker.hint}
                            />
                          </div>
                          <div className="py-4">
                            <p className="font-headline text-center text-white text-base uppercase tracking-widest">{sticker.name}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex items-center justify-center space-x-2 pt-8">
                {Array.from({ length: stickerCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => stickerApi?.scrollTo(i)}
                    className={`h-3 w-3 rounded-full transition-colors ${i === stickerCurrent ? 'bg-white' : 'bg-zinc-600 hover:bg-zinc-400'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
               <div className="text-center pt-8">
                <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-2 px-8 rounded-md text-xs uppercase tracking-widest">
                  See All
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="posters">
              <p className="text-center text-white py-20">Posters will be available soon.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="ModCMoto Apparel"
          width={1920}
          height={800}
          className="w-full h-auto"
          data-ai-hint="apparel merchandise"
        />
      </section>

      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <Carousel setApi={setHoodieApi} opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {hoodies.map((hoodie, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <div className="flex flex-col h-full">
                      <div className="bg-white p-4 flex-grow flex items-center justify-center">
                        <Image
                          src={hoodie.src}
                          alt={hoodie.name}
                          width={400}
                          height={500}
                          className="object-contain max-h-full"
                          data-ai-hint={hoodie.hint}
                        />
                      </div>
                      <div className="py-4">
                        <p className="font-headline text-center text-white text-base uppercase tracking-widest">{hoodie.name}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex items-center justify-center space-x-2 pt-8">
            {Array.from({ length: hoodieCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => hoodieApi?.scrollTo(i)}
                className={`h-3 w-3 rounded-full transition-colors ${i === hoodieCurrent ? 'bg-white' : 'bg-zinc-600 hover:bg-zinc-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="text-center pt-8">
            <Button className="bg-[#383838] hover:bg-[#4a4a4a] text-white font-bold py-2 px-8 rounded-md text-xs uppercase tracking-widest">
              See All
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Share className="h-12 w-12 mx-auto mb-4" />
              <p className="font-headline text-5xl font-bold">200,000+</p>
              <p className="font-headline text-lg uppercase tracking-wider">Tiktok Followers</p>
            </div>
            <div>
              <Instagram className="h-12 w-12 mx-auto mb-4" />
              <p className="font-headline text-5xl font-bold">200,000+</p>
              <p className="font-headline text-lg uppercase tracking-wider">Instagram Followers</p>
            </div>
            <div>
              <AlertCircle className="h-12 w-12 mx-auto mb-4" />
              <p className="font-headline text-5xl font-bold">1</p>
              <p className="font-headline text-lg uppercase tracking-wider">Crash</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#181818] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <a key={social.name} href={social.href} className={`w-9 h-9 flex items-center justify-center rounded-full ${social.color} ${social.textColor}`}>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-wider">Currency</span>
              <Select defaultValue="usd">
                <SelectTrigger className="w-[120px] bg-[#383838] border-none text-white font-bold">
                  <SelectValue placeholder="$ USD" />
                </SelectTrigger>
                <SelectContent className="bg-[#181818] text-white border-gray-700">
                  <SelectItem value="usd">$ USD</SelectItem>
                  <SelectItem value="eur">€ EUR</SelectItem>
                  <SelectItem value="gbp">£ GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#181818] border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="bg-[#383838] hover:bg-[#4a4a4a] rounded-none w-9 h-9"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <HelmetLogo className="h-16 w-16" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-semibold">
            <a href="#" className="hover:text-gray-300">Affiliate Links</a>
            <a href="#" className="hover:text-gray-300">Return Policy</a>
            <a href="#" className="hover:text-gray-300">Cookie policy</a>
            <a href="#" className="hover:text-gray-300">Terms & conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
