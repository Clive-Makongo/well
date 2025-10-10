import React from 'react'

interface HeroProps {
    title: string;
    tag: string
}

export function Hero({title, tag}: HeroProps) {
  return (
    <div className="bg-white border-b">
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="text-center space-y-4">
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                          {title}
                      </h1>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      { tag}
                      </p>
                  </div>
              </div>
          </div>
  )
}
