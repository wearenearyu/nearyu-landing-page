import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border mt-20">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-8 w-28">
                                <Image
                                    src="/purple full.png"
                                    alt="nearYU Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Your AI-powered business assistant ensuring safe, secure, and fast transactions on your favorite chat app.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">For Vendors</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">For Buyers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
                        </div>
                        <div className="mt-6">
                            <div className="text-sm text-muted-foreground mb-2">Need help? Chat with us</div>
                            <a href="#" className="flex items-center gap-2 text-primary font-medium hover:underline">
                                <MessageCircle size={16} /> +234 812 345 6789
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <div>&copy; {new Date().getFullYear()} NearYU AI. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
