"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { ShieldCheck, Zap, FileText, Search, Star, Users } from "lucide-react"

const FEATURES = [
    {
        icon: Search,
        title: "Hyperlocal Discovery",
        description: "Find verified vendors and products in your immediate vicinity instantly.",
    },
    {
        icon: ShieldCheck,
        title: "Escrow Shield",
        description: "Your money is held safely until you confirm satisfaction with the product or service.",
    },
    {
        icon: FileText,
        title: "Pro Invoicing",
        description: "Generate professional invoices and receipts directly within the chat.",
    },
    {
        icon: Zap,
        title: "Zero Friction",
        description: "No new apps to download. Everything happens on WhatsApp.",
    },
    {
        icon: Star,
        title: "Verified Reviews",
        description: "Make informed decisions with genuine reviews from real transactions.",
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "Join a growing network of trusted buyers and sellers.",
    },
]

export function FeaturesGrid() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full opacity-60 pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-400/10 blur-[100px] rounded-full opacity-60 pointer-events-none" />

            <div className="container-width">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Why Choose <span className="text-primary">nearYU</span>?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We've redesigned the commerce experience to be as simple as chatting with a friend, but as powerful as an enterprise platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature, index) => (
                        <GlassCard key={index} className="flex flex-col gap-4 group bg-white/50 border-gray-200">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground max-w-[80%]">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
