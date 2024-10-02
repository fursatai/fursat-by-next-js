import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MenuIcon, MapPinIcon, UsersIcon, StarIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from 'lucide-react' // Moved to the top


export default function HomePage(){
    const travelGuides = [
        { id: 1, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
        { id: 2, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
        { id: 3, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
        { id: 4, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
      ]

      return (
        <section className="mb-20">
          
          <div className="flex justify-center space-x-4 mb-10">
            <Button variant="outline" className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" />
              Travel Itinerary
            </Button>
            <Button variant="outline" className="flex items-center">
              <UsersIcon className="mr-2 h-4 w-4" />
              Group Tours
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelGuides.map((guide) => (
              <Card key={guide.id}>
                <CardContent className="p-0">
                  <Image src={guide.image} alt={guide.title} width={400} height={200} className="rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{guide.location}</p>
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Created by {guide.creator}</p>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelGuides.map((guide) => (
              <Card key={guide.id}>
                <CardContent className="p-0">
                  <Image src={guide.image} alt={guide.title} width={400} height={200} className="rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{guide.location}</p>
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Created by {guide.creator}</p>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </section>
      )
}


