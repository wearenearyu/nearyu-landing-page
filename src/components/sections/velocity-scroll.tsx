"use client"

import { cn } from "@/lib/utils"

const TICKER_ITEMS = [
    "Use nearYU to find vendors",
    "Send invoices on WhatsApp",
    "Connect with local businesses",
    "Instant customized Invoices",
]

export function VelocityScroll() {
    return (
        <div className="w-full overflow-hidden bg-background py-10 border-y border-gray-800/50">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-full">
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-scroll flex-row min-w-full group-hover:[animation-play-state:paused]">
                        {TICKER_ITEMS.map((item, i) => (
                            <span
                                key={i}
                                className="mx-4 text-4xl font-bold text-black whitespace-nowrap"
                            >
                                {item}
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {TICKER_ITEMS.map((item, i) => (
                            <span
                                key={`dup-${i}`}
                                className="mx-4 text-4xl font-bold text-black opacity-50 whitespace-nowrap"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    {/* Second duplicate layer if needed for very wide screens, 
              but usually one duplication is enough if the content width > view width.
              The animate-scroll handles the translation of -50%.
          */}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
            </div>
        </div>
    )
}
