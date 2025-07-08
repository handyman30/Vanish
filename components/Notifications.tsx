"use client";

import { motion } from "framer-motion";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function Notifications() {
  const { ts } = useLanguage();

  return (
    <section id="notifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{ts("notifications.title")}</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {ts("notifications.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-6"
              >
                <BellIcon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {ts("notifications.features.beforeVanish.title")}
                </h3>
                <p className="text-light/70">
                  {ts("notifications.features.beforeVanish.description")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl p-6"
              >
                <CalendarIcon className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {ts("notifications.features.perfectTiming.title")}
                </h3>
                <p className="text-light/70">
                  {ts("notifications.features.perfectTiming.description")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-6"
              >
                <ChatBubbleLeftIcon className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {ts("notifications.features.conversationStarters.title")}
                </h3>
                <p className="text-light/70">
                  {ts(
                    "notifications.features.conversationStarters.description"
                  )}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gradient-start/10 to-transparent rounded-2xl p-6"
              >
                <SparklesIcon className="w-8 h-8 text-gradient-start mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {ts("notifications.features.specialMoments.title")}
                </h3>
                <p className="text-light/70">
                  {ts("notifications.features.specialMoments.description")}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-light/80">
                  {ts("notifications.smartNotifications")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
