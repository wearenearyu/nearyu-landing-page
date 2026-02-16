"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Store, ArrowRight, Check } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import Image from "next/image"

export function UserToggleSection() {
    const [activeTab, setActiveTab] = useState<"buyer" | "vendor">("buyer")

    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="container-width">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Built for Everyone</h2>
                    <p className="text-muted-foreground">Whether you're shopping or selling, nearYU simplifies everything.</p>
                </div>

                {/* Toggle Controls */}
                <div className="flex justify-center mb-16">
                    <div className="p-1 rounded-full bg-secondary border border-border backdrop-blur-sm relative z-10 flex">
                        <button
                            onClick={() => setActiveTab("buyer")}
                            className={`relative px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${activeTab === "buyer" ? "text-white" : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {activeTab === "buyer" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingBag size={16} /> I&apos;m a Buyer
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("vendor")}
                            className={`relative px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${activeTab === "vendor" ? "text-white" : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {activeTab === "vendor" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-purple-600 rounded-full shadow-lg shadow-purple-600/30"
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <Store size={16} /> I&apos;m a Vendor
                            </span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "buyer" ? (
                            <motion.div
                                key="buyer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-foreground">
                                        Find Anything nearby,<br />
                                        <span className="text-primary">Instantly.</span>
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Search for products using natural language",
                                            "Get instant quotes from verified nearby sellers",

                                            "Track delivery in real-time on WhatsApp"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                    <Check size={12} className="text-primary" />
                                                </div>
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="glow" size="lg" className="rounded-full shadow-primary/25">
                                        Find a Vendor <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="relative">
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <Image
                                            src="/young-woman-white-suit-using-phone.jpg"
                                            alt="Buyer Experience"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="vendor"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <div className="order-2 md:order-1 relative">
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <Image
                                            src="/customer-purchasing-bio-food-products.jpg"
                                            alt="Vendor Experience"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <div className="order-1 md:order-2 space-y-8">
                                    <h3 className="text-3xl font-bold text-foreground">
                                        Sell to verified buyers,<br />
                                        <span className="text-purple-600">Effortlessly.</span>
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Receive qualified leads tailored to your inventory",
                                            "Automated invoicing and receipt generation",
                                            "Manage inventory and orders from WhatsApp"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                                                    <Check size={12} className="text-purple-600" />
                                                </div>
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="glow" size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 hover:shadow-purple-500/40">
                                        Register as Vendor <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
