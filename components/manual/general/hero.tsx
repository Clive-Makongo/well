import React from 'react'

interface HeroProps {
    title: string;
    tag: string
}

export function Hero({title, tag}: HeroProps) {
  return (
    <div className="hero bg-background border-b">
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:p-8 py-8">
                  <div className="text-center space-y-4">
                      <h1 className="text-3xl md:text-5xl font-med text-primary">
                          {title}
                      </h1>
                      <p className="text-lg text-primary max-w-2xl mx-auto">
                      { tag}
                      </p>
                  </div>
              </div>
          </div>
  )
}
