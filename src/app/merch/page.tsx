
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";
import Image from "next/image";

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


export default function MerchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
       <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center h-20">
             <Link href="/">
                <HelmetLogo priority={true} width={70} height={70}/>
             </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <div className="w-24 h-24 bg-zinc-800 border-2 border-zinc-700 rounded-full flex items-center justify-center mb-8">
            <PackageX className="w-12 h-12 text-zinc-500" />
        </div>
        <h1 className="text-5xl font-extrabold italic uppercase tracking-tighter mb-4" style={{ textShadow: '0 0 15px rgba(255,255,255,0.2)'}}>
          SOLD OUT
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-md">
            Our merch flew off the shelves faster than a crash compilation goes viral. We're working on a restock. Check back soon!
        </p>
        <Link href="/">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-base tracking-wider shadow-lg">
            BACK TO HOMEPAGE
          </Button>
        </Link>
      </main>
      
      <footer className="bg-[#181818] border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} ModCMoto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
