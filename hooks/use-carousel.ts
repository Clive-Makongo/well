import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const useCarousel = () => {

    // getting stuff from the library
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
            loop: true,
            skipSnaps: false,
            dragFree: false
    })
        const [selectedIndex, setSelectedIndex] = useState<number>(0)
        const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
        const [canScrollNext, setCanScrollNext] = useState<boolean>(false)

        const onSelect = useCallback(() => {
            if (!emblaApi) return
            setSelectedIndex(emblaApi.selectedScrollSnap())
            setCanScrollPrev(emblaApi.canScrollPrev())
            setCanScrollNext(emblaApi.canScrollNext())
        }, [emblaApi])


        const scrollPrev = useCallback(() => {
            emblaApi?.scrollPrev()
        }, [emblaApi])

        const scrollNext = useCallback(() => {
            emblaApi?.scrollNext()
        }, [emblaApi])
    return {
        emblaRef,
        emblaApi,
        selectedIndex,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
        onSelect
    }
}
