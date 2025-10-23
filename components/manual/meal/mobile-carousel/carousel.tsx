import React from 'react'
import { MealImage, MealType } from '@/types/meal/meal'
import { MealKey } from '@/context/meal-context'
import Image from 'next/image'
import { ChartModal } from '../chart-modal'
import { PassedProps } from '@/types/meal/chart'
import { EmblaViewportRefType } from 'embla-carousel-react'


interface CarouselProps { 
    images: MealImage
    meals: MealKey[],
    chartProps: PassedProps
    titles: MealType
    emblaRef: EmblaViewportRefType
}

export default function Carousel({ images, meals, chartProps, titles, emblaRef }: CarouselProps) {
  return (
    <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="embla__container flex">
                        {meals.map((meal: MealKey, id: number) => (
                            <div
                                key={id}
                                className="embla__slide flex-[0_0_100%] min-w-0 px-3"
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                                    {/* Image container with fixed aspect ratio */}
                                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                                        <Image
                                            src={images[meal]}
                                            alt={titles[meal]}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 600px"
                                            priority={id === 0}
                                        />
                                        
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        
                                        {/* Meal type badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                                                {meal}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content section */}
                                    <div className="p-5 space-y-4">
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                            {titles[meal]}
                                        </h3>
                                        
                                        {chartProps && chartProps[meal] && (
                                            <div className="pt-2 border-t border-gray-100">
                                                <ChartModal
                                                    calories={chartProps[meal].calories}
                                                    value={chartProps[meal].value}
                                                    label={chartProps[meal].label}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
  )
}
