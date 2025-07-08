"use client";

import { motion } from "framer-motion";
import {
  UserGroupIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function SocialProof() {
  const { ts } = useLanguage();

  return (
    <section id="social-proof" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
            <svg
              className="w-5 h-5 text-gradient-end"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
            </svg>
            <span className="text-sm text-light/80">
              {ts("socialProof.instagramBadge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{ts("socialProof.title")}</span>
            <br />
            <span className="text-light">{ts("socialProof.subtitle")}</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            {ts("socialProof.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8 relative">
              {/* Mock Instagram Profile Card */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold">
                      {ts("socialProof.profile.name")}
                    </h3>
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-light/70 mb-2">
                    <span className="font-medium">
                      {ts("socialProof.profile.followers")}
                    </span>
                    <span>•</span>
                    <span className="font-medium">
                      {ts("socialProof.profile.following")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-light/60">
                      {ts("socialProof.profile.activeStatus")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {ts("socialProof.stats.engagement")}
                  </div>
                  <div className="text-xs text-light/60">
                    {ts("socialProof.stats.engagementLabel")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {ts("socialProof.stats.avgLikes")}
                  </div>
                  <div className="text-xs text-light/60">
                    {ts("socialProof.stats.avgLikesLabel")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">
                    {ts("socialProof.stats.avgComments")}
                  </div>
                  <div className="text-xs text-light/60">
                    {ts("socialProof.stats.avgCommentsLabel")}
                  </div>
                </div>
              </div>

              {/* Recent Posts Preview */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-lg"
                  ></div>
                ))}
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-end/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-6">
              <UserGroupIcon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">
                {ts("socialProof.features.followerInsights.title")}
              </h3>
              <p className="text-light/70 mb-4">
                {ts("socialProof.features.followerInsights.description")}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-light/60">
                    {ts("socialProof.features.followerInsights.verified")}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <ChartBarIcon className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-2">
                {ts("socialProof.features.engagementRate.title")}
              </h3>
              <p className="text-light/70 mb-4">
                {ts("socialProof.features.engagementRate.description")}
              </p>
              <div className="w-full bg-dark/50 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <span className="text-xs text-light/60">
                {ts("socialProof.features.engagementRate.average")}
              </span>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      {ts("socialProof.features.activityStatus.label")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {ts("socialProof.features.activityStatus.title")}
                  </h3>
                  <p className="text-light/70">
                    {ts("socialProof.features.activityStatus.description")}
                  </p>
                </div>
              </div>
              <div className="bg-dark/30 rounded-lg p-3 text-sm text-light/60">
                <div className="flex items-center justify-between">
                  <span>
                    {ts("socialProof.features.activityStatus.toggle")}
                  </span>
                  <div className="w-12 h-6 bg-primary rounded-full relative">
                    <div className="absolute right-0 w-6 h-6 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm text-light/80">
              {ts("socialProof.privacy")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
