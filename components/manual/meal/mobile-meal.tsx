"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChartModal } from './chart-modal'
import Image from 'next/image'
import { MealImage, MealType } from '@/types/meal/meal'
import { ChartProps, PassedProps } from '@/types/meal/chart'
import { MealKey } from '@/context/meal-context'

interface CarouselProps {
    images: MealImage
    meals: readonly MealKey[]
    chartProps: PassedProps
    titles: MealType
}

export function MobileMeal({images, meals, chartProps, titles}: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        skipSnaps: false,
        dragFree: false
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext()
    }, [emblaApi])

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4 pb-6">
            {/* Carousel header */}
            <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    Your Meals
                </h2>
                <span className="text-sm text-gray-500">
                    {selectedIndex + 1} / {meals.length}
                </span>
            </div>

            {/* Carousel container with navigation arrows */}
            <div className="relative group">
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

                {/* Navigation arrows - hidden on mobile, visible on tablet+ */}
                <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className={`
                        hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 items-center justify-center
                        bg-white/90 backdrop-blur-sm rounded-full shadow-lg
                        transition-all duration-200
                        ${canScrollPrev 
                            ? 'opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                            : 'opacity-0 cursor-not-allowed'
                        }
                    `}
                    aria-label="Previous meal"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className={`
                        hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 items-center justify-center
                        bg-white/90 backdrop-blur-sm rounded-full shadow-lg
                        transition-all duration-200
                        ${canScrollNext 
                            ? 'opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110' 
                            : 'opacity-0 cursor-not-allowed'
                        }
                    `}
                    aria-label="Next meal"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            {/* Dots navigation */}
            <div className="flex justify-center gap-2 pt-2">
                {meals.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`
                            h-2 rounded-full transition-all duration-300
                            ${index === selectedIndex 
                                ? 'bg-blue-600 w-8' 
                                : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }
                        `}
                        aria-label={`Go to ${meals[index]} meal`}
                    />
                ))}
            </div>
        </div>
    )
}