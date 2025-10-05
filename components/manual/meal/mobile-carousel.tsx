import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MealSegmentProps } from './desktop-meal'
import { ChartModal } from './chart-modal'
import Image from 'next/image'

export function MobileMeal({images, meals, chartProps, titles}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    console.log(images, meals)

    const slide = () => {
        return (
            <>
            <div className="embla__slide flex-[0_0_100%] min-w-0 bg-red-500">1</div>
            <div className="embla__slide flex-[0_0_100%] min-w-0 bg-green-500">1</div>
            <div className="embla__slide flex-[0_0_100%] min-w-0 bg-blue-500">1</div>
            </>
        )
    }

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
              {meals.map((meal, id) => (
                  <div
                      key={id}
                      className="embla__slide flex-[0_0_100%] min-w-0 bg-red-500"
                  >
                      <Image
                          src={images[meal]}
                          alt={titles[meal]}
                          width={3000}
                          height={3000}
                      />
                      <div>{titles[meal]}</div>
                      {chartProps &&
                          <ChartModal
                          chartProps={chartProps[meal]}
                      />}

                </div>
            ))}
        </div>
    </div>
  )
}
