"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Store, ArrowRight, Check } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

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
                            <span className="flex items-center gap-2">
                                <ShoppingBag size={16} /> I'm a Buyer
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
                            <span className="flex items-center gap-2">
                                <Store size={16} /> I'm a Vendor
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
                                            "Pay securely via Escrow protection",
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
                                        Start Shopping Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="relative">
                                    <GlassCard className="aspect-square flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/10 bg-white/50">
                                        {/* Abstract Visual for Buyer */}
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
                                            <div className="relative z-10 flex flex-col gap-4 animate-float">
                                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-lg w-3/4 self-end">
                                                    <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                                                    <div className="h-2 w-full bg-gray-100 rounded opacity-50" />
                                                </div>
                                                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 w-3/4 self-start">
                                                    <div className="h-2 w-24 bg-primary/30 rounded mb-2" />
                                                    <div className="h-2 w-full bg-primary/10 rounded" />
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-lg w-3/4 self-end">
                                                    <div className="h-2 w-16 bg-gray-200 rounded mb-2" />
                                                    <div className="flex gap-2">
                                                        <div className="h-10 w-10 rounded bg-gray-100" />
                                                        <div className="flex-1 space-y-1">
                                                            <div className="h-2 w-full bg-gray-200 rounded opacity-70" />
                                                            <div className="h-2 w-2/3 bg-gray-100 rounded opacity-50" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
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
                                    <GlassCard className="aspect-square flex items-center justify-center p-8 bg-gradient-to-bl from-purple-500/5 to-transparent border-purple-500/10 bg-white/50">
                                        {/* Abstract Visual for Vendor */}
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl" />
                                            <div className="relative z-10 flex flex-col items-center justify-center gap-6 animate-float h-full">
                                                <div className="w-full bg-white border border-gray-100 rounded-lg p-4 shadow-xl">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <div className="text-sm text-gray-500">Total Sales</div>
                                                        <div className="text-purple-600 text-xs">+12.5%</div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-gray-900">₦ 450,000</div>
                                                    <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <div className="h-full w-[70%] bg-purple-500 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="w-full bg-white border border-gray-100 rounded-lg p-4 shadow-xl translate-x-4">
                                                    <div className="flex gap-3 items-center">
                                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                                                            <Store size={14} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">New Order #2841</div>
                                                            <div className="text-xs text-gray-500">2 mins ago via WhatsApp</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
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
                                            "Guaranteed payments via Escrow system",
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
