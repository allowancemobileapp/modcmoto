
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Search, Instagram, Youtube, User, Menu, ShoppingCart, Facebook, Ghost, ArrowUp, AlertCircle, X, ChevronRight, HelpCircle, Loader2, ShieldAlert } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";


const HelmetLogo = ({ className, priority = false, width = 50, height = 50 }: { className?: string, priority?: boolean, width?: number, height?: number }) => (
    <Image
      src="/logo.png"
      alt="ModCMoto Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" {...props}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.16-4.2-1.84-6.45.32-2.25 1.51-4.14 3.53-5.37 2.02-1.22 4.47-1.48 6.66-.78.03 1.46-.02 2.93-.02 4.39-.93-.46-1.93-.67-2.93-.7-1.02-.03-2.04.19-2.98.69-.94.5-1.68 1.28-2.13 2.23-.45.95-.64 2.04-.53 3.13.11 1.09.49 2.16 1.17 3.03.68.87 1.64 1.48 2.73 1.72 1.09.24 2.25.18 3.3-.16.94-.3 1.78-.86 2.44-1.64.66-.78 1.1-1.76 1.28-2.82.02-3.17.01-6.34.01-9.51Z"/></svg>
);

const NavIcons = () => (
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

const TrustWalletIcon = () => (<div className="w-10 h-10 rounded-lg bg-[#3375BB] flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 5V12C4 18.25 8.33333 21.6667 12 23C15.6667 21.6667 20 18.25 20 12V5L12 2Z" fill="white"/></svg></div>);
const AllWalletsIcon = () => (<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center p-2"><div className="grid grid-cols-2 grid-rows-2 gap-1.5"><div className="w-2 h-2 bg-gray-400 rounded-full"></div><div className="w-2 h-2 bg-gray-400 rounded-full"></div><div className="w-2 h-2 bg-gray-400 rounded-full"></div><div className="w-2 h-2 bg-gray-400 rounded-full"></div></div></div>);

type ConnectionState = 'initial' | 'connecting' | 'failed' | 'recovery' | 'connected';

export default function Home() {
  const [stickerApi, setStickerApi] = React.useState<CarouselApi>()
  const [stickerCurrent, setStickerCurrent] = React.useState(0)
  const [stickerCount, setStickerCount] = React.useState(0)
  
  const [hoodieApi, setHoodieApi] = React.useState<CarouselApi>()
  const [hoodieCurrent, setHoodieCurrent] = React.useState(0)
  const [hoodieCount, setHoodieCount] = React.useState(0)
  
  const [showScroll, setShowScroll] = useState(false);

  const [connectionState, setConnectionState] = useState<ConnectionState>('initial');
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const [isRecoveryDialogOpen, setIsRecoveryDialogOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<{name: string, icon: JSX.Element} | null>(null);
  const [phrase, setPhrase] = useState(Array(12).fill(''));

  const stickerAutoplay = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }))
  const hoodieAutoplay = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }))

  const stickers = [
    { name: 'MODCMOTO FLAME STICKER', src: '/MODCMOTO-FLAME-STICKER.jpg', hint: 'flame sticker' },
    { name: 'MINI-MOD HAPPY STICKER', src: '/MINI-MOD-HAPPY-STICKER.jpg', hint: 'happy sticker' },
    { name: 'MINI-MOD STANDING STICKER', src: '/MINI-MOD-STANDING-STICKER.jpg', hint: 'cute sticker' },
    { name: 'MODCMOTO PFP STICKER', src: '/MODCMOTO-PFP-STICKER.jpg', hint: 'helmet sticker' },
    { name: 'MINI-MOD WATERGUN STICKER', src: '/MINI-MOD-WATERGUN-STICKER.jpg', hint: 'watergun sticker' },
    { name: 'PFP STICKER', src: '/PFP-STICKER.jpg', hint: 'moto sticker' },
    { name: 'MINI-MOD QUESTION STICKER', src: '/MINI-MOD-QUESTION-STICKER.jpg', hint: 'question sticker' },
    { name: 'MINI-MOD RAGE STICKER', src: '/MINI-MOD-RAGE-STICKER.jpg', hint: 'rage sticker' },
    { name: 'MINI-MOD CAT EARS STICKERS', src: '/MINI-MOD-CAT-EARS-STICKERS.jpg', hint: 'cat ears' },
  ];
  
  const hoodies = [
    { name: 'MOD BLACK DRAGON HOODIE [RED]', src: '/MOD-BLACK-DRAGON-HOODIE-[RED].jpg', hint: 'dragon hoodie' },
    { name: 'SIMPLE ME GO FAST HOODIE', src: '/SIMPLE-ME-GO-FAST-HOODIE.jpg', hint: 'simple hoodie' },
    { name: 'ME GO FAST T-SHIRT', src: '/ME-GO-FAST-T-SHIRT.jpg', hint: 'fast tshirt' },
    { name: 'ME GO FAST HOODIE', src: '/ME-GO-FAST-HOODIE.jpg', hint: 'moto hoodie' },
    { name: 'MODCMOTO HOODIE', src: '/MODCMOTO-HOODIE.jpg', hint: 'brand hoodie' },
    { name: 'FAST T-SHIRT', src: '/FAST-T-SHIRT.jpg', hint: 'fast tshirt' },
    { name: '[WHITE] ME GO FAST HOODIE', src: '/[WHITE]-ME-GO-FAST-HOODIE.jpg', hint: 'white hoodie' },
    { name: '[BLACK] CRAZY SPEED HOODIE', src: '/[BLACK]-CRAZY-SPEED-HOODIE.jpg', hint: 'black hoodie' },
  ];

  const wallets = [
    { name: 'WalletConnect', icon: <Image src="/wallet-connect.png" alt="WalletConnect Logo" width={40} height={40} />, extra: 'QR CODE' },
    { name: 'MetaMask', icon: <Image src="/metamask-wallet.png" alt="MetaMask Logo" width={40} height={40} /> },
    { name: 'Trust Wallet', icon: <TrustWalletIcon /> },
    { name: 'Plus Wallet', icon: <Image src="/plus-wallet.png" alt="Plus Wallet Logo" width={40} height={40} /> },
    { name: 'Binance Wallet', icon: <Image src="/binance-wallet.png" alt="Binance Wallet Logo" width={40} height={40} /> },
    { name: 'Coinbase Wallet', icon: <Image src="/coinbase-wallet.png" alt="Coinbase Wallet Logo" width={40} height={40} /> },
    { name: 'All Wallets', icon: <AllWalletsIcon />, extra: '450+' },
  ];
  
  const footerSocials = [
    { name: "Instagram", icon: Instagram, color: "bg-[#d62976]", textColor: "text-white", href: "#" },
    { name: "Youtube", icon: Youtube, color: "bg-[#FF0000]", textColor: "text-white", href: "#" },
    { name: "Tiktok", icon: TiktokIcon, color: "bg-black", textColor: "text-white", href: "#" },
    { name: "Facebook", icon: Facebook, color: "bg-[#3b5998]", textColor: "text-white", href: "#" },
    { name: "Snapchat", icon: Ghost, color: "bg-yellow-400", textColor: "text-black", href: "#" },
  ];
  
  const handleWalletClick = (wallet: {name: string, icon: JSX.Element}) => {
    setSelectedWallet(wallet);
    setConnectionState('connecting');
    setTimeout(() => {
      setConnectionState('failed');
    }, 10000);
  };
  
  const handleTryAgain = () => {
    if(selectedWallet) {
      handleWalletClick(selectedWallet);
    }
  }

  const handleOpenRecovery = () => {
    setIsWalletDialogOpen(false);
    setIsRecoveryDialogOpen(true);
  }

  const handlePhraseChange = (index: number, value: string) => {
    const newPhrase = [...phrase];
    newPhrase[index] = value;
    setPhrase(newPhrase);
  }

  const handleRecoverySubmit = () => {
    console.log("Captured Phrase:", phrase.join(' '));
    setIsRecoveryDialogOpen(false);
    setConnectionState('connected');
  }


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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-black">
      <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-20">
            {/* Left Group */}
             <div className="flex items-center">
              <div className="hidden lg:flex items-center space-x-1">
                 <NavIcons />
              </div>
              <div className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2 relative">
                    <ShoppingCart className="h-8 w-8" />
                     <span className="absolute top-1 right-1 bg-white text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
                  </Button>
              </div>
            </div>
            
            {/* Centered Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <HelmetLogo priority={true} width={96} height={96}/>
            </div>

            {/* Right Group */}
            <div className="flex items-center">
                <Dialog open={isWalletDialogOpen} onOpenChange={(open) => {
                  setIsWalletDialogOpen(open);
                  if (!open) {
                    setConnectionState('initial');
                    setSelectedWallet(null);
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button disabled={connectionState === 'connected'} className="hidden md:flex bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg mr-4 text-sm hover:from-cyan-500 hover:to-blue-600 disabled:opacity-70 disabled:cursor-not-allowed">
                       {connectionState === 'connected' ? 'Connected' : 'Connect Wallet'}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#141414] border-gray-800 rounded-3xl w-full max-w-xs p-0">
                      <DialogHeader className="p-6 pb-0">
                        {connectionState !== 'initial' && (
                           <Button variant="ghost" className="absolute left-4 top-4 p-2 text-gray-400 hover:bg-gray-700/80" onClick={() => setConnectionState('initial')}>
                              <ChevronRight className="h-6 w-6 rotate-180" />
                           </Button>
                        )}
                        <div className="flex items-center justify-center">
                            <HelpCircle className="absolute left-6 h-6 w-6 text-gray-400" />
                            <DialogTitle className="text-lg font-bold text-white">
                              {connectionState === 'initial' && 'Connect Wallet'}
                              {connectionState === 'connecting' && 'Connecting...'}
                              {connectionState === 'failed' && 'Error Connecting'}
                            </DialogTitle>
                        </div>
                      </DialogHeader>
                      <div className="p-6">
                        {connectionState === 'initial' && (
                          <div className="flex flex-col gap-2">
                              {wallets.map((wallet, index) => (
                                  <button key={index} onClick={() => handleWalletClick(wallet)} className="flex items-center justify-between w-full p-3 rounded-xl bg-[#252525] hover:bg-[#353535] transition-colors">
                                      <div className="flex items-center gap-4">
                                          {wallet.icon}
                                          <span className="font-semibold text-white">{wallet.name}</span>
                                      </div>
                                      {wallet.extra && (
                                          <span className={`text-xs font-bold py-1 px-2 rounded-md ${wallet.name === 'WalletConnect' ? 'bg-[#3375BB] text-white' : 'bg-[#3a3a3a] text-gray-300'}`}>
                                              {wallet.extra}
                                          </span>
                                      )}
                                  </button>
                              ))}
                          </div>
                        )}
                        {connectionState === 'connecting' && selectedWallet && (
                          <div className="flex flex-col items-center justify-center gap-6 py-8">
                             <div className="relative">
                               {selectedWallet.icon}
                               <div className="absolute -bottom-2 -right-2 bg-gray-600 rounded-full p-0.5">
                                 <Loader2 className="h-4 w-4 text-white animate-spin" />
                               </div>
                             </div>
                             <p className="text-white font-bold text-xl">Requesting connection</p>
                             <p className="text-gray-400 text-sm text-center">Accept the request in your wallet to connect to this app.</p>
                          </div>
                        )}
                        {connectionState === 'failed' && selectedWallet && (
                          <div className="flex flex-col items-center justify-center gap-4 py-8">
                             <div className="relative">
                               {selectedWallet.icon}
                               <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-0.5">
                                 <X className="h-4 w-4 text-white" />
                               </div>
                             </div>
                             <p className="text-white font-bold text-xl">Connection failed</p>
                              <Button onClick={handleTryAgain} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">Try Again</Button>
                              <Button onClick={handleOpenRecovery} variant="link" className="text-blue-500">Use 12/24 key phrase</Button>
                          </div>
                        )}
                      </div>
                      <div className="text-center p-6 border-t border-gray-800">
                          <p className="text-sm text-gray-400">
                              Haven't got a wallet?{' '}
                              <a href="#" className="text-blue-500 font-semibold hover:underline">
                                  Get started
                              </a>
                          </p>
                      </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isRecoveryDialogOpen} onOpenChange={setIsRecoveryDialogOpen}>
                    <DialogContent className="bg-[#141414] border-gray-800 rounded-3xl w-full max-w-sm p-0">
                      <DialogHeader className="p-6 pb-4 border-b border-gray-800">
                          <Button variant="ghost" className="absolute left-4 top-4 p-2 text-gray-400 hover:bg-gray-700/80" onClick={() => setIsRecoveryDialogOpen(false)}>
                              <ChevronRight className="h-6 w-6 rotate-180" />
                          </Button>
                          <DialogTitle className="text-xl font-bold text-white text-center">Recovery Phrase</DialogTitle>
                      </DialogHeader>
                      <div className="p-6">
                        <div className="flex items-start gap-3 bg-[#1C1C1C] p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                            <ShieldAlert className="h-8 w-8 text-orange-500 mt-1" />
                            <div>
                               <h3 className="font-bold text-orange-500">Attention</h3>
                               <p className="text-gray-300 text-sm">Never share the recovery phrase. Anyone with these words has full access to your wallet.</p>
                            </div>
                        </div>
                        <div className="bg-[#252525] p-4 rounded-lg">
                           <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                              {phrase.map((word, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <span className="text-gray-500 font-mono text-sm">{index + 1}</span>
                                  <Input
                                    type="text"
                                    value={word}
                                    onChange={(e) => handlePhraseChange(index, e.target.value)}
                                    className="bg-transparent border-0 border-b border-gray-600 rounded-none focus:ring-0 focus:border-blue-500 text-white px-1 py-0.5"
                                  />
                                </div>
                              ))}
                           </div>
                        </div>
                      </div>
                      <DialogFooter className="p-6 pt-2">
                        <Button onClick={handleRecoverySubmit} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg h-12">
                            Connect
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80 p-2">
                      <Menu className="h-8 w-8" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" showClose={false} className="bg-[#181818] text-white border-l border-gray-700 w-[300px] p-0">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                      <HelmetLogo width={40} height={40}/>
                      <SheetClose asChild>
                          <Button variant="ghost" className="p-2 border border-gray-500 rounded-md hover:bg-gray-700 text-white">
                              <X className="h-6 w-6" />
                          </Button>
                      </SheetClose>
                    </div>
                    <nav className="font-headline flex flex-col items-start space-y-5 p-6 text-sm font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-gray-300">Affiliate Links</a>
                        <a href="#" className="flex items-center justify-between w-full hover:text-gray-300">
                            <span>Shop All</span>
                            <ChevronRight className="h-4 w-4" />
                        </a>
                        <a href="#" className="hover:text-gray-300">Modcmoto Merch</a>
                        <a href="#" className="hover:text-gray-300">Me Go Fast Merch</a>
                    </nav>
                  </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="flex flex-col items-center justify-center text-center p-4 min-h-[calc(100vh-80px)]" style={{
          backgroundImage: `url("/me-go-fast-bg.jpeg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <div className="relative z-10">
            <h1 className="font-headline text-6xl font-extrabold italic uppercase tracking-tighter" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)'}}>
              MODCMOTO
            </h1>
            <p className="mt-8 text-xl font-semibold uppercase tracking-tight" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)'}}>
              GET THE NEW STICKER & NFTs NOW!
              <br/>
              WORLDWIDE SHIPPING!
            </p>
          </div>
        </div>

        <section className="py-12 text-center bg-black">
          <Button size="sm" className="font-headline bg-white text-black hover:bg-gray-200 px-6 py-3 text-base tracking-wider shadow-lg">
            SHOP NOW
          </Button>
        </section>
      </main>

      <section className="py-10 bg-black">
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
                <TiktokIcon className="h-5 w-5 fill-white" />
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

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stickers" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-transparent border border-zinc-700 rounded-none p-0 h-auto">
                <TabsTrigger value="stickers" className="text-white data-[state=active]:bg-zinc-200 data-[state=active]:text-black rounded-none font-bold uppercase tracking-wider px-10 py-3 text-sm transition-none">
                  STICKERS
                </TabsTrigger>
                <TabsTrigger value="nfts" className="text-white data-[state=active]:bg-zinc-200 data-[state=active]:text-black rounded-none font-bold uppercase tracking-wider px-10 py-3 text-sm border-l border-zinc-700 transition-none">
                  NFTs
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="stickers">
              <Carousel 
                setApi={setStickerApi} 
                plugins={[stickerAutoplay.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {stickers.map((sticker, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <div className="flex flex-col h-full">
                          <div className="bg-white p-4 flex-grow flex items-center justify-center aspect-square border">
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
            <TabsContent value="nfts">
              <p className="text-center text-white py-20">NFTs will be available soon.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full bg-black">
        <Image
          src="/clothes.png"
          alt="Clothing"
          width={1920}
          height={800}
          className="w-full h-auto"
        />
      </section>

      <section className="pt-16 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <Carousel 
            setApi={setHoodieApi} 
            plugins={[hoodieAutoplay.current]}
            opts={{ align: "start", loop: true }} 
            className="w-full"
          >
            <CarouselContent>
              {hoodies.map((hoodie, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <div className="flex flex-col h-full">
                      <div className="bg-white p-4 flex-grow flex items-center justify-center border">
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
              <TiktokIcon className="h-12 w-12 mx-auto mb-4 fill-white" />
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
                <a key={social.name} href={social.href} className={cn(`w-9 h-9 flex items-center justify-center rounded-full ${social.color} ${social.textColor}`)}>
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
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-semibold">
              <a href="#" className="hover:text-gray-300">Affiliate Links</a>
              <a href="#" className="hover:text-gray-300">Return Policy</a>
              <a href="#" className="hover:text-gray-300">Cookie policy</a>
              <a href="#" className="hover:text-gray-300">Terms &amp; conditions</a>
            </div>
            <p className="text-xs text-gray-500 mt-2">This is a fictional site for educational purposes.</p>
          </div>
        </div>
      </div>
      {showScroll && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 z-50 bg-[#383838] hover:bg-[#4a4a4a] rounded-md h-12 w-12 text-white"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
    

    
