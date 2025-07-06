'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-full px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold gradient-text">Vanish</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-light/80 hover:text-light transition-colors">Features</a>
            <a href="#video" className="text-light/80 hover:text-light transition-colors">Video Intros</a>
            <a href="#social-proof" className="text-light/80 hover:text-light transition-colors">Social Proof</a>
            <a href="#notifications" className="text-light/80 hover:text-light transition-colors">Smart Alerts</a>
          </div>
          
          <button className="button-primary">
            Get Early Access
          </button>
        </div>
      </div>
    </motion.nav>
  )
} 