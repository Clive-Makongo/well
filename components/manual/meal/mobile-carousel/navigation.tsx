import React from 'react'
import {ChevronLeft, ChevronRight, } from 'lucide-react'

interface NavigationProps {
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollNext: boolean;
    canScrollPrev: boolean;
}

export default function Navigation({ scrollPrev, canScrollPrev, scrollNext, canScrollNext }: NavigationProps) {
  return (
      <>
          <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className={`
                        md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background
                        w-10 h-10 items-center justify-center
                        
                        transition-all duration-200
                        ${canScrollPrev 
                            ? 'opacity-50 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                            : 'opacity-0 cursor-not-allowed'
                        }
                    `}
                    aria-label="Previous meal"
                >

                    <ChevronLeft className="w-5 h-5 text-primary" />
                </button>

                <button
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className={`
                        md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 flex items-center justify-end
                        bg-background backdrop-blur-sm shadow-lg
                        transition-all duration-200
                        ${canScrollNext 
                            ? 'opacity-50 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                            : 'opacity-0 cursor-not-allowed'
                        }
                    `}
                    aria-label="Next meal"
                >
              <ChevronRight className="w-5 h-5 text-primary" />
                </button>
      </>
  )
}
