"use client"
import React, {useEffect } from 'react'
import { useCarousel } from '@/hooks/use-carousel'
import Carousel from './mobile-carousel/carousel'
import { MealImage, MealType } from '@/types/meal/meal'
import { PassedProps } from '@/types/meal/chart'
import { MealKey } from '@/context/meal-context'
import MobileMealHeader from './mobile-carousel/mobile-meal-header'
import Navigation from './mobile-carousel/navigation'

interface CarouselProps {
    images: MealImage
    meals: MealKey[],
    chartProps: PassedProps
    titles: MealType
}

export function MobileMeal({ images, meals, chartProps, titles }: CarouselProps) {

    const {
        emblaRef,
        emblaApi,
        selectedIndex,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
        onSelect
    } = useCarousel()

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
    
    return (
        <div className="w-full max-w-2xl mx-auto space-y-4 pb-6">
           <MobileMealHeader selectedIndex={selectedIndex} />
            <div className="relative group">
                <Carousel
                    images={images}
                    meals={meals}
                    chartProps={chartProps}
                    titles={titles}
                    emblaRef={emblaRef}
                />
                <Navigation
                    scrollPrev={scrollPrev}
                    scrollNext={scrollNext}
                    canScrollPrev={canScrollPrev}
                    canScrollNext={canScrollNext}
                />
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
                                ? 'bg-primary w-8' 
                                : 'bg-muted-foreground w-2'
                            }
                        `}
                        aria-label={`Go to ${meals[index]} meal`}
                    />
                ))}
            </div>
        </div>
    )
}