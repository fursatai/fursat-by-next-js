'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const travelImages = [
  { src: "/carousel-image1.jpg", alt: "Scuba divers underwater in a deep blue ocean" },
  { src: "/carousel-image2.jpg", alt: "Person swimming in clear turquoise water" },
  { src: "/carousel-image3.jpg", alt: "Group of people sitting on a beach facing a mountain" },
  { src: "/carousel-image4.jpg", alt: "Person paragliding near a rocky coastline" },
  { src: "/carousel-image5.jpg", alt: "Hikers on a mountain trail" },
  { src: "/carousel-image6.jpg", alt: "Colorful hot air balloons over a landscape" },
  { src: "/carousel-image7.jpg", alt: "Ancient ruins in a lush forest" },
  { src: "/carousel-image8.jpg", alt: "Kayakers in a crystal clear lake" },
  { src: "/carousel-image9.jpg", alt: "Kayakers in a crystal clear lake" },
  { src: "/carousel-image10.jpg", alt: "Kayakers in a crystal clear lake" },
]

export default function TravelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 4 >= travelImages.length ? 0 : prevIndex + 4
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 4 < 0 ? travelImages.length - 4 : prevIndex - 4
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <div className="flex space-x-4 overflow-hidden">
            {[0, 1, 2, 3].map((offset) => {
              const index = (currentIndex + offset) % travelImages.length
              return (
                <Card key={index} className="flex-shrink-0 w-1/4">
                  <CardContent className="p-2">
                    <Image
                      src={travelImages[index].src}
                      alt={travelImages[index].alt}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}