"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  User,
  Settings,
  LogOut,
  Heart,
  MessageCircle,
  Bell,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Vanish</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <button
                onClick={() => signOut()}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Welcome Card */}
          <div className="md:col-span-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome back, {session.user?.name || "User"}!
              </h2>
              <p className="text-gray-300">
                Ready to find your perfect match? Complete your profile to get
                started.
              </p>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Profile Completion
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Basic Info</span>
                <span className="text-green-400">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Photos</span>
                <span className="text-yellow-400">⚠</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Video Intro</span>
                <span className="text-red-400">✗</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Verification</span>
                <span className="text-red-400">✗</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
              Complete Profile
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Your Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Profile Views</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Likes Received</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Matches</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Conversations</span>
                <span className="text-white font-semibold">0</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200">
                <Heart className="h-5 w-5" />
                <span>Start Swiping</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                <User className="h-5 w-5" />
                <span>Edit Profile</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200">
                <MessageCircle className="h-5 w-5" />
                <span>View Messages</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
