import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import React from 'react'
import image from '@/public/assets/bg-image.jpg'

interface MealSegmentProps {
  mealImage: string;
  mealType: string;
}

export default function MealSegment({mealImage, mealType}:MealSegmentProps ) {
    
  return (
      <div>
          
          
          <Card>
              <CardHeader>
                  <CardTitle>
                      Card Title
                  </CardTitle>
                  <CardDescription>
                      {mealType}
                  </CardDescription>
                  <CardAction>
                      Card Action
                  </CardAction>
              </CardHeader>
              <CardContent>
                  <Image
                      src={mealImage}
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                  />
              </CardContent>
              <CardFooter>
                  <p>
                      Card Footer
                  </p>
              </CardFooter>
          </Card>
    </div>
  )
}
