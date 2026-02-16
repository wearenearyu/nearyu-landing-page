"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
            <div className="container-width flex items-center justify-between mt-[-20px] md:mt-[-60px]">
                {/* Desktop/Mobile Logo (Purple) */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="relative h-32 w-32 md:h-48 md:w-48 transition-all duration-300">
                        {/* Only show purple logo when mobile menu is CLOSED */}
                        <div className={cn("transition-opacity duration-300", isMobileMenuOpen ? "opacity-0" : "opacity-100")}>
                            <Image
                                src="/purple full.png"
                                alt="nearYU Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 pt-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        How It Works
                    </Link>
                    <div className="flex items-center gap-4 ml-4">
                        <Button variant="outline" className="border-border text-muted-foreground hover:text-primary hover:border-primary/50">
                            Become a Vendor
                        </Button>
                        <Button variant="glow" className="gap-2 shadow-primary/25">
                            <MessageCircle size={18} />
                            Chat Now
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden pt-4 relative z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn("p-2 transition-colors", isMobileMenuOpen ? "text-white" : "text-foreground")}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-primary flex flex-col pt-24 px-6 md:hidden"
                    >
                        {/* Logo inside Mobile Menu (White) */}
                        <div className="absolute top-6 left-4">
                            <div className="relative h-32 w-40">
                                <Image
                                    src="/whitee logogo.png"
                                    alt="nearYU Logo White"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col gap-8 mt-12">
                            <Link
                                href="#features"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-bold text-white hover:text-white/80 transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="#how-it-works"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-bold text-white hover:text-white/80 transition-colors"
                            >
                                How It Works
                            </Link>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-auto mb-12 flex flex-col gap-4">
                            <Button
                                variant="outline"
                                className="w-full justify-center bg-transparent border-white text-white hover:bg-white hover:text-primary h-12 text-lg"
                            >
                                Become a Vendor
                            </Button>
                            <Button
                                className="w-full justify-center gap-2 bg-white text-primary hover:bg-white/90 h-12 text-lg font-bold shadow-lg shadow-black/10"
                            >
                                <MessageCircle size={20} />
                                Chat Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
