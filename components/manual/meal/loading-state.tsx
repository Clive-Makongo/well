import React from "react";

export function LoadingState() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-2 border-4 border-purple-400 border-t-transparent rounded-full animate-spin animation-delay-150" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                    Generating your meals...
                </h3>
                <p className="text-gray-600">
                    This may take a few moments
                </p>
                <div className="flex justify-center gap-1 pt-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-400" />
                </div>
            </div>
        </div>
    );
}