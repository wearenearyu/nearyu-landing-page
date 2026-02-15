"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
            <div className="container-width flex items-center justify-between mt-[-60px]">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-48 w-48 md:w-64 transition-all duration-300">
                        <Image
                            src="/purple full.png"
                            alt="nearYU Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
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

                {/* Mobile Menu Toggle */}
                <div className="md:hidden pt-8">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-foreground p-2"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border mt-4"
                    >
                        <div className="container-width py-6 flex flex-col gap-4">
                            <Link
                                href="#features"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-muted-foreground hover:text-primary"
                            >
                                Features
                            </Link>
                            <Link
                                href="#how-it-works"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-muted-foreground hover:text-primary"
                            >
                                How It Works
                            </Link>
                            <div className="h-px bg-border my-2" />
                            <Button variant="outline" className="w-full justify-center">
                                Become a Vendor
                            </Button>
                            <Button variant="glow" className="w-full justify-center gap-2">
                                <MessageCircle size={18} />
                                Chat Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
