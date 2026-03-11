import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16 mt-20">
            <div className="container-width flex flex-col items-center text-center">

                {/* Logo */}
                <Link href="/" className="mb-6">
                    <div className="relative h-16 w-48">
                        <Image
                            src="/whitee logogo.png"
                            alt="nearYU Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Description */}
                <p className="max-w-xl text-lg text-primary-foreground/90 mb-8 font-medium">
                    Everything You Need is Just a Chat Away
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-6 mb-12">
                    <a href="https://x.com/nearyu_ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Twitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/nearyu_ai/?hl=en" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Instagram size={24} />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-8" />

                {/* Legal & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-sm text-primary-foreground/80">
                    <div>
                        &copy; {new Date().getFullYear()} NearYU AI. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white hover:underline transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white hover:underline transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
