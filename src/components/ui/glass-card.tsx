import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -5, borderColor: "rgba(16, 185, 129, 0.4)" } : undefined}
            className={cn(
                "glass-card rounded-2xl p-6 transition-colors duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
}
