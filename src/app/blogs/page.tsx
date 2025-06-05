import React from "react";
import { Clock, AlertCircle } from "lucide-react";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-x-hidden flex items-center justify-center">
      <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 max-w-2xl w-full mx-4">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-2 rounded-full">
          <Clock className="w-6 h-6 animate-pulse text-white" />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Blog Coming Soon
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">I&apos;m working hard to bring you amazing content. Stay tuned!</p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-gray-900/50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span>Expected launch: July 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
