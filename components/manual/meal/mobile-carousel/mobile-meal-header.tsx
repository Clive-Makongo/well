import React from 'react'

interface HeaderProps {
    selectedIndex: number;
}

export default function MobileMealHeader({ selectedIndex}: HeaderProps) {
  return (
      <div className="flex items-center justify-between text-sm text-primary px-4">
           
            <p>
                Swipe to see your meals
            </p>
            <span>
              {selectedIndex + 1} / 3
          </span>
      </div>
      
  )
}
