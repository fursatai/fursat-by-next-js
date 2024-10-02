import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MenuIcon, MapPinIcon, UsersIcon, StarIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from 'lucide-react' // Moved to the top
import Navbar from "../components/common/navbar";
import CustomCarousel from "../components/home/carousel"
import Cards from '../components/home/cards';



export default function HomePage() {
  const travelGuides = [
    { id: 1, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
    { id: 2, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
    { id: 3, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
    { id: 4, title: "Explorers Guide to Indonesia", location: "Bali, Indonesia", rating: 5, creator: "Ashley Elliott", image: "/card-image1.jpg" },
  ]

  return (
    <div className="container mx-auto px-4">

      < Navbar />

      <main>
        <section className="text-center py-20">
          <h1 className="text-7xl font-bold mb-4">
            Get travel advice<br />
            from travel <span className="text-teal-500">creators</span>
          </h1>
          <Button>Explore</Button>
        </section>

        <CustomCarousel/>

        <Cards/>

        <section className="flex justify-between items-center mb-20">
          {['Australia', 'USA', 'Maldives', 'South Africa', 'New Zealand'].map((country) => (
            <Image key={country} src="/australia-image.png" alt={`${country} logo`} width={80} height={40} />
          ))}
        </section>
      </main>

      

      <footer className="py-4 text-center text-sm text-gray-500">
        <p>© 2024 Fursat · Company Details · Privacy · Terms</p>
        <div className="flex justify-center space-x-4 mt-2">
          <InstagramIcon className="h-5 w-5" />
          <LinkedinIcon className="h-5 w-5" />
          <FacebookIcon className="h-5 w-5" />
        </div>
      </footer>
    </div>
  )
}
