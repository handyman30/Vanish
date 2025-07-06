'use client'

import { motion } from 'framer-motion'
import { SparklesIcon, ShieldCheckIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
            <SparklesIcon className="w-5 h-5 text-accent" />
            <span className="text-sm text-light/80">Make connections before they vanish</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Real Connections</span>
            <br />
            <span className="text-light">Start with Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light/70 mb-12 max-w-3xl mx-auto">
            Don't let real connections vanish. Experience authentic dating with verified profiles, 
            smart notifications that remind you before matches expire, and video introductions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary glow"
            >
              Join Waitlist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary"
            >
              Watch Demo
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-effect rounded-2xl p-6"
            >
              <ShieldCheckIcon className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">100% Verified</h3>
              <p className="text-sm text-light/60">Every profile authenticated</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-effect rounded-2xl p-6"
            >
              <VideoCameraIcon className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Video Intros</h3>
              <p className="text-sm text-light/60">5-10 second personality clips</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="w-8 h-8 mb-3 mx-auto">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Instagram Verified</h3>
              <p className="text-sm text-light/60">Real social presence</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 