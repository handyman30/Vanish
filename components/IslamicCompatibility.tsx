"use client";

import { motion } from "framer-motion";
import {
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  CalendarIcon,
  UsersIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const islamicFeatures = [
  {
    icon: BuildingLibraryIcon,
    title: "Religious Practice Matching",
    description:
      "Match based on prayer frequency, Quran reading habits, and Islamic knowledge level. Find someone who shares your spiritual journey.",
    color: "text-primary",
  },
  {
    icon: BookOpenIcon,
    title: "Sect & Madhab Preferences",
    description:
      "Specify your preferred Islamic school of thought and find compatible matches who share your religious understanding and practices.",
    color: "text-gradient-end",
  },
  {
    icon: CalendarIcon,
    title: "Marriage Timeline Intentions",
    description:
      "Be clear about your timeline - whether you're ready for marriage now or looking to build a relationship first. No mixed signals.",
    color: "text-secondary",
  },
  {
    icon: UsersIcon,
    title: "Family Involvement Preferences",
    description:
      "Choose your comfort level with family involvement - from early introductions to traditional wali arrangements. Your choice, your pace.",
    color: "text-accent",
  },
  {
    icon: ShieldCheckIcon,
    title: "Wali/Guardian Options",
    description:
      "Flexible guardian involvement - from traditional wali arrangements to modern family introductions. Respect for Islamic traditions with modern flexibility.",
    color: "text-primary",
  },
  {
    icon: StarIcon,
    title: "Lifestyle Compatibility",
    description:
      "Match on hijab preferences, halal food choices, social activities, and Islamic lifestyle choices. Build a harmonious Islamic home together.",
    color: "text-gradient-start",
  },
  {
    icon: HeartIcon,
    title: "Islamic Values Alignment",
    description:
      "Deep compatibility based on core Islamic values, character traits, and life goals. Find someone who shares your vision of an Islamic marriage.",
    color: "text-secondary",
  },
  {
    icon: SparklesIcon,
    title: "Halal Interaction Guidelines",
    description:
      "Built-in Islamic etiquette for respectful communication. Maintain Islamic boundaries while getting to know each other in a halal way.",
    color: "text-accent",
  },
];

export default function IslamicCompatibility() {
  return (
    <section id="islamic-compatibility" className="py-24 px-6 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-start rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-end rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-4">
              <div className="text-white text-3xl font-bold">☪</div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Islamic Compatibility</span>
          </h2>
          <p className="text-xl text-light/70 max-w-4xl mx-auto leading-relaxed">
            Find your soulmate with features designed specifically for Muslim
            couples, respecting Islamic values while embracing modern
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {islamicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 border border-white/5 hover:border-white/20">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color.replace(
                      "text-",
                      ""
                    )} to-${feature.color.replace(
                      "text-",
                      ""
                    )}/20 flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-light">
                      {feature.title}
                    </h3>
                    <p className="text-light/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Islamic Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-effect rounded-3xl p-12 text-center border border-white/10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Built on Islamic Principles
              </h3>
              <p className="text-light/70 max-w-3xl mx-auto text-lg leading-relaxed">
                Our platform is designed with Islamic values at its core. We
                respect the sanctity of marriage, promote halal interactions,
                and support traditional family values while providing modern
                tools for finding your perfect match.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
