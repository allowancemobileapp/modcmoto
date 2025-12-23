"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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

const products = [
    {
      name: 'Kawasaki Ninja H2R',
      cost: '$62,000',
      imageUrl: 'https://ooeltztitcjyuvsqjrls.supabase.co/storage/v1/object/public/bikes/Kawasaki_Ninja_H2.jpg',
      hint: 'kawasaki ninja'
    },
    {
      name: '2022 Yamaha YZF-R7',
      cost: '$8,999',
      imageUrl: 'https://ooeltztitcjyuvsqjrls.supabase.co/storage/v1/object/public/bikes/TWDDSJZAZNFEJHVNY3BGYKCJK4.jpg',
      hint: 'yamaha yzf'
    },
    {
      name: '2025 Suzuki GSX-R1000R',
      cost: '$18,000',
      imageUrl: 'https://ooeltztitcjyuvsqjrls.supabase.co/storage/v1/object/public/bikes/0731b.jpg',
      hint: 'suzuki gsx'
    },
    {
      name: 'The Honda Rebel 1100 (CMX1100)',
      cost: '$9,000',
      imageUrl: 'https://ooeltztitcjyuvsqjrls.supabase.co/storage/v1/object/public/bikes/honda-cmx1100-rebel-1.jpg',
      hint: 'honda rebel'
    },
    {
      name: 'Yamaha YZF-R6',
      cost: '$8,000',
      imageUrl: 'https://ooeltztitcjyuvsqjrls.supabase.co/storage/v1/object/public/bikes/2022_YZF-R6_MDNM6_AUS_STU_003_750x600.jpg',
      hint: 'yamaha r6'
    }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
       <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-20">
             <Link href="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/80">
                    <ArrowLeft className="h-6 w-6" />
                </Button>
             </Link>
             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/">
                    <HelmetLogo priority={true} width={70} height={70}/>
                </Link>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold italic uppercase tracking-tighter mb-8 text-center" style={{ textShadow: '0 0 15px rgba(255,255,255,0.2)'}}>
                Shop All
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                    <div key={product.name} className="bg-[#181818] border border-gray-800 rounded-lg overflow-hidden group flex flex-col">
                        <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={product.hint}
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-lg font-bold uppercase tracking-wider text-white truncate">{product.name}</h2>
                            <p className="text-2xl font-semibold text-accent mt-2">{product.cost}</p>
                            <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200 font-bold">
                                View Product
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>
      
      <footer className="bg-[#181818] border-t border-gray-700 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} ModCMoto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
