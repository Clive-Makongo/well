import React from 'react'

interface HeaderProps {
    selectedIndex: number;
}

export default function MobileMealHeader({ selectedIndex}: HeaderProps) {
  return (
      <div className="flex items-center justify-between px-4">
            <h2 className="text-xl font-semibold text-gray-900">
                Your Meals
            </h2>
            <p>
                Swipe to see your meals
            </p>
            <span className="text-sm text-gray-500">
              {selectedIndex + 1} / 3
          </span>
      </div>
      
  )
}
