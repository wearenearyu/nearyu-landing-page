"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Download, Check } from "lucide-react"
import { useState, useEffect } from "react"

const HERO_IMAGES = [
    "/Hero Images/african-american-woman-tailor-talking-smartphone-reading-notebook-atelier.jpg",
    "/Hero Images/black-woman-running-small-business.jpg",
    "/Hero Images/medium-shot-black-woman-running-small-business.jpg",
    "/Hero Images/medium-shot-woman-holding-clay-pot.jpg",
    "/Hero Images/tired-african-barista-holding-cup-with-coffee-while-leaning-counter-coffee-shop-looking-camera-with-happy-look.jpg"
]

const FLOATING_BUBBLES = [
    {
        id: 1,
        text: "Hi! 👋 I'm nearYU, your business secretary.",
        time: "10:42",
        style: "top-[10%] right-[15%]", // Top right
        delay: 0,
        isUser: false
    },
    {
        id: 2,
        text: "Need to find verified electronics shops in Yaba? Or send a pro invoice? I got you!",
        time: "10:42",
        style: "top-[30%] right-[5%]", // Middle right
        delay: 1.5,
        isUser: false
    },
    {
        id: 3,
        text: "Find me phone accessories near Ikeja",
        time: "10:43",
        style: "bottom-[35%] right-[25%]", // Middle-bottom leftish
        delay: 3,
        isUser: true
    },
    {
        id: 4,
        text: "Found 12 verified vendors! 🎯\nTop pick: TechHub Accessories (4.9★) - 0.3km away. Tap to view catalog →",
        time: "10:43",
        style: "bottom-[10%] right-[5%]", // Bottom right
        delay: 4.5,
        isUser: false,
        isResult: true
    }
]

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full bg-[#ffffff] p-4 lg:p-6 min-h-[calc(110vh-2rem)] flex items-center justify-center">
            <div className="relative w-full max-w-[1600px] mt-25 h-[calc(100vh-4rem)] min-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto flex items-center">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <Image
                                src={HERO_IMAGES[currentImage]}
                                alt="Hero background"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full w-full px-6 md:px-12 lg:px-20">
                    {/* Text Content */}
                    <div className="flex flex-col items-start text-left max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-4xl lg:text-6xl font-medium tracking-tight text-white mb-6"
                        >
                            Everything You Need is Just a Chat Away
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl font-light"
                        >
                            Find all you need near you, all inside the app you already use. No downloads. Zero Stress
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-lg h-14 font-medium transition-all hover:scale-105"
                            >
                                Find Vendors Near Me
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 text-lg h-14 font-medium backdrop-blur-sm transition-all"
                            >
                                Register My Business
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Floating Bubbles (Right Side) */}
                    <div className="relative h-full min-h-[500px] hidden lg:block w-full">
                        {FLOATING_BUBBLES.map((bubble, i) => (
                            <motion.div
                                key={bubble.id}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: bubble.delay,
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 1.5 // Offset floating animations
                                    }
                                }}
                                className={`absolute ${bubble.style} z-20 max-w-[320px]`}
                            >
                                <div className={`
                                    p-4 rounded-2xl shadow-xl backdrop-blur-sm border border-white/5
                                    ${bubble.isUser
                                        ? 'bg-[#005c4b]/95 text-white rounded-tr-sm'
                                        : 'bg-[#1f2c34]/95 text-white rounded-tl-sm'}
                                `}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-light">
                                        {bubble.text}
                                    </p>
                                    <span className={`text-[10px] block text-right mt-1.5 ${bubble.isUser ? 'text-white/70' : 'text-gray-400'}`}>
                                        {bubble.time} {bubble.isUser && <span className="text-blue-300 ml-1">✓✓</span>}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
