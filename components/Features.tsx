"use client";

import { motion } from "framer-motion";
import {
  CheckBadgeIcon,
  BellAlertIcon,
  HeartIcon,
  LockClosedIcon,
  ChartBarIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function Features() {
  const { ts } = useLanguage();
  const features = [
    {
      icon: CheckBadgeIcon,
      title: ts("features.multiLevelVerification.title"),
      description: ts("features.multiLevelVerification.description"),
      color: "text-primary",
    },
    {
      icon: UserGroupIcon,
      title: ts("features.instagramSocialProof.title"),
      description: ts("features.instagramSocialProof.description"),
      color: "text-gradient-end",
    },
    {
      icon: BellAlertIcon,
      title: ts("features.smartNotifications.title"),
      description: ts("features.smartNotifications.description"),
      color: "text-secondary",
    },
    {
      icon: HeartIcon,
      title: ts("features.qualityMatches.title"),
      description: ts("features.qualityMatches.description"),
      color: "text-accent",
    },
    {
      icon: ChartBarIcon,
      title: ts("features.engagementAnalytics.title"),
      description: ts("features.engagementAnalytics.description"),
      color: "text-primary",
    },
    {
      icon: LockClosedIcon,
      title: ts("features.privacyFirst.title"),
      description: ts("features.privacyFirst.description"),
      color: "text-gradient-start",
    },
    {
      icon: BuildingLibraryIcon,
      title: ts("features.islamicCompatibility.title"),
      description: ts("features.islamicCompatibility.description"),
      color: "text-primary",
    },
    {
      icon: ShieldCheckIcon,
      title: ts("features.waliGuardian.title"),
      description: ts("features.waliGuardian.description"),
      color: "text-gradient-end",
    },
    {
      icon: UserIcon,
      title: ts("features.seriousCandidates.title"),
      description: ts("features.seriousCandidates.description"),
      color: "text-accent",
    },
  ];
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
            <span className="gradient-text">{ts("features.title")}</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {ts("features.description")}
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
  );
}
