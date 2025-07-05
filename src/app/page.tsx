import { Button } from "@/components/ui/button"
import { Instagram, Search, ShoppingCart, Twitter, User, Youtube } from "lucide-react"

const ModCMotoLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 134 25" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="20" fontFamily="Space Grotesk, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">
      MODCMOTO
    </text>
  </svg>
)

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 z-10">
        <nav className="container mx-auto flex items-center justify-between">
          <a href="#" className="w-1/3">
            <ModCMotoLogo className="h-6 w-auto text-primary-foreground" />
          </a>
          
          <div className="w-1/3 flex items-center justify-end space-x-1 sm:space-x-2">
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
             </Button>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
             </Button>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hidden md:inline-flex">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
             </Button>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hidden md:inline-flex">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
             </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hidden md:inline-flex">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
             </Button>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
             </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(169,155,255,0.1),rgba(255,255,255,0))]"></div>

        <div className="relative z-10">
            <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tighter">
                <span className="text-primary-foreground">MODC</span><span className="text-accent">MOTO</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                High-performance decals for the modern rider. Unleash your style on the asphalt.
            </p>
        </div>
      </main>

      <footer className="p-4 sm:p-6 z-10">
        <div className="container mx-auto">
            <div className="bg-primary/20 border border-primary/50 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 animate-pulse-slow">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-center sm:text-left text-primary-foreground">
                GET YOUR NEW STICKERS
              </h2>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0 font-bold">
                Shop The Drop
              </Button>
            </div>
        </div>
      </footer>
    </div>
  )
}
