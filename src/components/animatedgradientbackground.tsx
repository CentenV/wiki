import type { ReactNode } from "react";

function AnimatedGradientBackground({
    children,
    duration = 5,
}: { children: ReactNode, duration?: number }) {
    const colors = ["#fd746c", "#2c3e50"];
    return (
        <div className="w-full h-full justify-center items-center flex" style={{
            background: `linear-gradient(-45deg, ${colors.join(', ')})`,
            backgroundSize: "200% 200%",
            animation: `gradient ${duration}s ease infinite`,
        }}>
            {children}
        </div>
    );
}

export default AnimatedGradientBackground;