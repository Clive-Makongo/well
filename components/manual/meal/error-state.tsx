import React from "react";

interface ErrorStateProps {
    error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                <div className="flex items-start gap-3">
                    <svg 
                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                    <div>
                        <p className="font-medium">Error generating meals</p>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}