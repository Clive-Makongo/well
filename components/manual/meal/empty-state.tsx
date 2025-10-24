import React from "react";

export function EmptyState() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <svg 
                        className="w-12 h-12 text-muted-foreground" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                    No meals generated yet
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                    Set your calorie goal and dietary preferences above to get started with your personalized meal plan
                </p>
            </div>
        </div>
    );
}