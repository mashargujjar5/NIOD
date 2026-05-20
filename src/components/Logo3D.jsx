import { motion } from 'framer-motion';
import { useState } from 'react';
import './Logo3D.css';

export default function Logo3D({ size = 'md' }) {
    const [isHovered, setIsHovered] = useState(false);

    const sizeConfig = {
        sm: 'w-20 h-28',
        md: 'w-32 h-44',
        lg: 'w-48 h-64',
        xl: 'w-64 h-80'
    };

    return (
        <motion.div
            className={`flex items-center justify-center ${sizeConfig[size]} relative overflow-hidden rounded-lg`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
                background: 'linear-gradient(135deg, rgba(255, 250, 240, 0.7), rgba(255, 240, 220, 0.7))',
                backdropFilter: 'blur(10px)',
                perspective: '1200px'
            }}
        >
            {/* Main Bottle Container with 3D Rotation */}
            <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{
                    rotateY: isHovered ? [0, 360] : [0, 360],
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{
                    rotateY: {
                        duration: isHovered ? 8 : 20,
                        repeat: Infinity,
                        ease: 'linear'
                    },
                    scale: {
                        duration: 0.3,
                        ease: 'easeOut'
                    }
                }}
                style={{
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Bottle SVG */}
                <svg
                    viewBox="0 0 200 280"
                    className="w-full h-full"
                    style={{
                        filter: isHovered
                            ? 'drop-shadow(0 30px 50px rgba(217, 119, 6, 0.5))'
                            : 'drop-shadow(0 20px 35px rgba(217, 119, 6, 0.35))'
                    }}
                >
                    <defs>
                        {/* Premium Glass */}
                        <linearGradient id="glass" x1="0%" y1="0%" x2="100%">
                            <stop offset="0%" stopColor="#fff9f0" />
                            <stop offset="25%" stopColor="#ffe8d6" />
                            <stop offset="50%" stopColor="#fef3e2" />
                            <stop offset="75%" stopColor="#ffe8d6" />
                            <stop offset="100%" stopColor="#fff9f0" />
                        </linearGradient>

                        {/* Golden Liquid */}
                        <linearGradient id="liquid" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="50%" stopColor="#ea580c" />
                            <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>

                        {/* Shine */}
                        <linearGradient id="shine" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                            <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>

                    {/* Shadow Base */}
                    <ellipse cx="100" cy="260" rx="45" ry="12" fill="rgba(0,0,0,0.2)" opacity="0.6" />

                    {/* Bottle Bottom Round */}
                    <circle cx="100" cy="220" r="35" fill="rgba(200, 150, 80, 0.4)" />

                    {/* Bottle Body - Main */}
                    <path
                        d="M 70 80 Q 65 100 65 140 Q 65 180 75 215 Q 90 230 100 235 Q 110 230 125 215 Q 135 180 135 140 Q 135 100 130 80 Z"
                        fill="url(#glass)"
                        stroke="rgba(217, 119, 6, 0.15)"
                        strokeWidth="1.5"
                    />

                    {/* Bottle Left Shadow */}
                    <path
                        d="M 70 80 Q 68 100 68 140 Q 68 180 76 215 Q 88 228 95 233 Q 93 225 92 215 Q 90 180 88 140 Q 87 100 85 80 Z"
                        fill="rgba(0,0,0,0.08)"
                    />

                    {/* Bottle Right Shine */}
                    <path
                        d="M 130 80 Q 132 100 132 140 Q 132 180 124 215 Q 112 228 105 233 Q 107 225 108 215 Q 110 180 112 140 Q 113 100 115 80 Z"
                        fill="rgba(255,255,255,0.5)"
                    />

                    {/* Bottle Neck */}
                    <path
                        d="M 80 65 L 82 78 L 118 78 L 120 65 Q 100 62 80 65 Z"
                        fill="url(#glass)"
                        stroke="rgba(217, 119, 6, 0.2)"
                        strokeWidth="1"
                    />

                    {/* Cap Base */}
                    <rect x="82" y="50" width="36" height="16" rx="2" fill="url(#glass)" stroke="rgba(180,180,180,0.4)" strokeWidth="1" />

                    {/* Cap Ring */}
                    <rect x="82" y="48" width="36" height="3" rx="1" fill="rgba(180,180,180,0.8)" />

                    {/* Cap Shine */}
                    <rect x="88" y="52" width="6" height="10" rx="1" fill="rgba(255,255,255,0.7)" />

                    {/* Sprayer Tip */}
                    <circle cx="100" cy="44" r="4" fill="rgba(160,160,160,0.9)" />
                    <circle cx="100" cy="44" r="2" fill="rgba(120,120,120,0.8)" />

                    {/* Liquid Inside */}
                    <path
                        d="M 75 130 Q 73 150 76 175 Q 90 205 100 210 Q 110 205 124 175 Q 127 150 125 130 Z"
                        fill="url(#liquid)"
                        className="liquid-wave-bottle"
                    />

                    {/* Liquid Shine */}
                    <path
                        d="M 82 150 Q 84 165 85 185"
                        stroke="url(#shine)"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.7"
                        className="liquid-shine-bottle"
                    />

                    {/* Top Glass Shine */}
                    <ellipse cx="85" cy="90" rx="5" ry="10" fill="rgba(255,255,255,0.5)" opacity="0.7" />

                    {/* Floating Droplet 1 */}
                    <circle cx="50" cy="90" r="2" fill="#fb923c" opacity="0.8" className="droplet-1" />

                    {/* Floating Droplet 2 */}
                    <circle cx="150" cy="95" r="2" fill="#fb923c" opacity="0.8" className="droplet-2" />

                    {/* Floating Droplet 3 */}
                    <circle cx="100" cy="60" r="2" fill="#fb923c" opacity="0.8" className="droplet-3" />

                    {/* Floating Droplet 4 */}
                    <circle cx="70" cy="100" r="1.8" fill="#fb923c" opacity="0.8" className="droplet-4" />

                    {/* Floating Droplet 5 */}
                    <circle cx="130" cy="85" r="1.8" fill="#fb923c" opacity="0.8" className="droplet-5" />
                </svg>

                {/* Overlay shimmer */}
                <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                        backgroundSize: '200% 200%',
                        pointerEvents: 'none'
                    }}
                    animate={{
                        backgroundPosition: isHovered ? ['200% 200%', '-200% -200%'] : ['200% 200%', '200% 200%']
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                    opacity: isHovered ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.4), transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: -1
                }}
            />

            {/* Pulse ring */}
            <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                style={{
                    border: '2px solid rgba(251, 146, 60, 0.5)',
                    pointerEvents: 'none'
                }}
            />
        </motion.div>
    );
}
