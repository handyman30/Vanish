'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon, BellAlertIcon, HeartIcon, LockClosedIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: CheckBadgeIcon,
    title: "Multi-Level Verification",
    description: "AI-powered identity verification combined with social proof ensures every profile is authentic. Say goodbye to catfishing forever.",
    color: "text-primary"
  },
  {
    icon: UserGroupIcon,
    title: "Instagram Social Proof",
    description: "See real follower counts, engagement rates, and activity status. Know they're genuine with verified social presence.",
    color: "text-gradient-end"
  },
  {
    icon: BellAlertIcon,
    title: "Smart Notifications",
    description: "Get reminded about expiring matches, suggested conversation starters, and optimal times to connect based on mutual activity.",
    color: "text-secondary"
  },
  {
    icon: HeartIcon,
    title: "Quality Matches",
    description: "Our algorithm focuses on compatibility over quantity, ensuring meaningful connections that have a higher chance of success.",
    color: "text-accent"
  },
  {
    icon: ChartBarIcon,
    title: "Engagement Analytics",
    description: "View authentic engagement rates calculated from the last 10 posts. Higher engagement means more genuine connections.",
    color: "text-primary"
  },
  {
    icon: LockClosedIcon,
    title: "Privacy First",
    description: "Your data is encrypted end-to-end. Control what you share and when, with granular privacy settings for every interaction.",
    color: "text-gradient-start"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Features that Matter</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            We've reimagined online dating with features designed to create 
            authentic connections and respect your time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-light/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 