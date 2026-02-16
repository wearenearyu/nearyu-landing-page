"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Smartphone, Receipt, MapPin } from "lucide-react"

export function FeaturesGrid() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-white">
            <div className="container-width px-6 md:px-12 lg:px-20">

                {/* Section Header */}
                <div className="mb-16 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 text-[#0b141a]">
                        Why Choose <span className="text-primary">nearYU</span>?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We&apos;ve redesigned the commerce experience to be as simple as chatting with a friend, but as powerful as an enterprise platform.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Card 1: Top / Full Width (Blue) */}
                    <div className="col-span-1 lg:col-span-2 bg-[#eef8ff] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 z-10">
                            <h3 className="text-2xl md:text-4xl font-medium text-[#0b141a] mb-4">
                                Run your business on WhatsApp
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 max-w-lg">
                                Get Leads, Chat with customers, and Grow your business without leaving your favorite app.
                            </p>
                            <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline text-lg">
                                Learn More <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        {/* Visual Mockup Placeholder */}
                        <div className="w-full relative h-[350px] md:h-[450px] mt-8 md:mt-0 overflow-hidden rounded-2xl shadow-sm shrink-0 md:flex-1">
                            <Image
                                src="/Hero Images/african-american-woman-tailor-talking-smartphone-reading-notebook-atelier.jpg"
                                alt="WhatsApp Business Interface"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Card 2: Bottom Left (Yellow) */}
                    <div className="col-span-1 bg-[#fffbf0] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden min-h-[400px] flex flex-col">
                        <div className="z-10 mb-auto">
                            <h3 className="text-2xl md:text-3xl font-medium text-[#0b141a] mb-4">
                                Smart Invoicing
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Create professional invoices, smart and easy right on WhatsApp
                            </p>
                            <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        {/* Visual Mockup */}
                        <div className="mt-8 relative w-full h-[200px] bg-white rounded-t-xl shadow-sm border border-orange-100 p-4 transform translate-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Receipt className="w-4 h-4 text-orange-500" />
                                </div>
                                <div className="h-2 w-24 bg-gray-100 rounded-full" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-gray-50 rounded-full" />
                                <div className="h-2 w-3/4 bg-gray-50 rounded-full" />
                                <div className="h-2 w-1/2 bg-gray-50 rounded-full" />
                            </div>
                            <div className="absolute bottom-4 right-4 text-right">
                                <div className="text-xs text-gray-400">Total</div>
                                <div className="text-lg font-bold text-[#0b141a]">$4,950.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Bottom Right (Pink) */}
                    <div className="col-span-1 bg-[#fef2f2] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden min-h-[400px] flex flex-col">
                        <div className="z-10 mb-auto">
                            <h3 className="text-2xl md:text-3xl font-medium text-[#0b141a] mb-4">
                                Hyperlocal Discovery
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Get discovered by verified customers in your neighborhood. Boost your visibility instantly.
                            </p>
                            <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        {/* Visual Mockup */}
                        <div className="mt-8 relative w-full h-[250px] overflow-hidden rounded-2xl mx-auto shadow-sm translate-y-4">
                            <Image
                                src="/medium-shot-man-restaurant-with-smartphone.jpg"
                                alt="Hyperlocal Discovery"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
