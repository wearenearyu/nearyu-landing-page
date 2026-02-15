"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50  z-10" />
                <Image
                    src="/hero-bg.jpg"
                    alt="African business woman using phone"
                    fill
                    className="object-cover object-center "
                    priority
                />
            </div>

            <div className="container-width flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Live in Lagos & Abuja
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl"
                >
                    Your Business Secretary <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        on WhatsApp
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
                >
                    Find products, send invoices, and track orders without leaving your favorite chat app. Powered by AI, protected by Escrow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button variant="glow" size="lg" className="min-w-[200px] gap-2 shadow-primary/25">
                        <MessageCircle className="w-5 h-5" />
                        Chat with nearYU
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[180px] gap-2 hover:bg-secondary">
                        See How It Works
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>No App Download</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Escrow Protected</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Instant Response</span>
                    </div>
                </motion.div>

                {/* Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative mt-20 w-full max-w-4xl"
                >
                    <div className="relative rounded-t-3xl border border-border bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-4 px-4 py-3 border-b border-border bg-gray-50/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 text-center text-xs text-muted-foreground font-mono">
                                whatsapp.com/nearyu-ai
                            </div>
                        </div>

                        <div className="p-4 md:p-8 flex flex-col gap-6 bg-[#efe7dd]">
                            {/* Chat Messages */}
                            <div className="flex justify-end">
                                <div className="bg-[#d9fdd3] text-gray-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                                    Hi! I need to find a supplier for customized eco-friendly packaging in Lagos.
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                                    <p className="mb-2">Found 3 top-rated suppliers for you! 🌿</p>
                                    <div className="space-y-2">
                                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex gap-3">
                                            <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
                                            <div>
                                                <div className="font-semibold text-primary">GreenPack NG</div>
                                                <div className="text-xs text-gray-500">Verified • 4.9 ★</div>
                                                <div className="text-xs text-gray-600 mt-1">MOQ: 100 units • ₦850/unit</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        <button className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                                            View Quote
                                        </button>
                                        <button className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                                            Chat with Vendor
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Glow behind mockup */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    )
}
