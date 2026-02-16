"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Utilizing the same hero images for consistency, can be replaced later
const AVATARS = [
    {
        id: 1,
        src: "/Hero Images/african-american-woman-tailor-talking-smartphone-reading-notebook-atelier.jpg",
        alt: "User Avatar 1",
        style: "top-[10%] left-[10%]",
        delay: 0
    },
    {
        id: 2,
        src: "/Hero Images/black-woman-running-small-business.jpg",
        alt: "User Avatar 2",
        style: "top-[20%] right-[15%]",
        delay: 1.5,
        bubble: "Hello! 11:53"
    },
    {
        id: 3,
        src: "/Hero Images/medium-shot-black-woman-running-small-business.jpg",
        alt: "User Avatar 3",
        style: "bottom-[20%] left-[15%]",
        delay: 1,
        bubble: "Bonjour 11:53"
    },
    {
        id: 4,
        src: "/Hero Images/medium-shot-woman-holding-clay-pot.jpg",
        alt: "User Avatar 4",
        style: "bottom-[15%] right-[20%]",
        delay: 2.5,
        bubble: "Hola! 11:53"
    },
    {
        id: 5,
        src: "/Hero Images/tired-african-barista-holding-cup-with-coffee-while-leaning-counter-coffee-shop-looking-camera-with-happy-look.jpg",
        alt: "User Avatar 5",
        style: "top-[50%] left-[5%] -translate-y-1/2",
        delay: 3.5,
        bubble: "Привет 11:53"
    },
    {
        // Adding a few more simulated positions/bubbles without specific images if needed or reusing
        id: 6,
        src: "/Hero Images/black-woman-running-small-business.jpg",
        alt: "User Avatar 6",
        style: "top-[15%] left-[30%]",
        delay: 2,
        bubble: "مضحك جدا 11:59 ✓✓",
        isUser: true // Green bubble
    },
    {
        id: 7,
        src: "/Hero Images/medium-shot-black-woman-running-small-business.jpg",
        alt: "User Avatar 7",
        style: "top-[30%] right-[5%]",
        delay: 0.5
    },
    {
        id: 8,
        src: "/Hero Images/african-american-woman-tailor-talking-smartphone-reading-notebook-atelier.jpg",
        alt: "User Avatar 8",
        style: "bottom-[30%] right-[5%]",
        delay: 3,
        bubble: "Hallo Freunde 11:59 ✓✓",
        isUser: true
    }
]

export function ValueProp() {
    return (
        <section className="w-full bg-[#ffffff] py-24 lg:py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            <div className="container-width px-6 md:px-12 lg:px-20 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-tight text-[#0b141a] max-w-5xl mx-auto leading-tight"
                >
                    Why wait days for shipping? With nearyu AI, find verified vendors near you and get what you need in minutes. Secure, local, and incredibly fast all inside WhatsApp.
                </motion.h2>
            </div>

            {/* Floating Avatars */}
            <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
                {AVATARS.map((avatar, i) => (
                    <motion.div
                        key={avatar.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: avatar.delay * 0.2 // Stagger entrance
                        }}
                        className={`absolute ${avatar.style} flex items-center gap-3`}
                        animate={{
                            y: [0, -15, 0]
                        }}
                        // @ts-ignore
                        transition={{
                            duration: 5 + (i % 3), // Varied float duration
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: avatar.delay // Offset float start
                        }}
                    >
                        {/* Avatar Image */}
                        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                            <Image
                                src={avatar.src}
                                alt={avatar.alt}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Optional Chat Bubble */}
                        {avatar.bubble && (
                            <div className={`
                                px-4 py-2 rounded-2xl shadow-md text-sm font-medium whitespace-nowrap
                                ${avatar.isUser
                                    ? 'bg-[#d9fdd3] text-[#0b141a] rounded-bl-none order-first' // Green user bubble
                                    : 'bg-white text-[#0b141a] rounded-tl-none'} // White incoming bubble
                            `}>
                                {avatar.bubble}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Background elements (blurred blobs for depth) */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl -z-10" />
        </section>
    )
}
