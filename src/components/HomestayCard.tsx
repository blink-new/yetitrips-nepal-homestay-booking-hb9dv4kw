import { Star, MapPin, Wifi, Mountain, Leaf, Camera } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

interface HomestayCardProps {
  id: string
  name: string
  location: string
  rating: number
  price: number
  image: string
  features: string[]
  available: boolean
  distance?: string
  altitude?: string
}

const HomestayCard = ({ 
  name, 
  location, 
  rating, 
  price, 
  image, 
  features, 
  available,
  distance,
  altitude 
}: HomestayCardProps) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'mountain view':
        return <Mountain className="h-3 w-3" />
      case 'organic garden':
        return <Leaf className="h-3 w-3" />
      case 'wifi':
        return <Wifi className="h-3 w-3" />
      case 'photography spots':
        return <Camera className="h-3 w-3" />
      default:
        return null
    }
  }

  const getFeatureColor = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'mountain view':
        return 'bg-blue-500 text-white'
      case 'organic garden':
        return 'bg-green-500 text-white'
      case 'traditional cuisine':
        return 'bg-orange-500 text-white'
      case 'tea plantation access':
        return 'bg-amber-600 text-white'
      case 'cultural experience':
        return 'bg-purple-500 text-white'
      case 'hiking trails':
        return 'bg-gray-600 text-white'
      case 'bird watching':
        return 'bg-yellow-500 text-white'
      case 'photography spots':
        return 'bg-red-500 text-white'
      case 'wifi':
        return 'bg-blue-600 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Feature chips */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index}
                className={`text-xs px-2 py-1 ${getFeatureColor(feature)} border-0`}
              >
                <span className="flex items-center gap-1">
                  {getFeatureIcon(feature)}
                  {feature}
                </span>
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge className="text-xs px-2 py-1 bg-black/50 text-white border-0">
                +{features.length - 3} more
              </Badge>
            )}
          </div>

          {/* Availability indicator */}
          <div className="absolute top-3 right-3">
            <div className={`w-3 h-3 rounded-full ${available ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Homestay name and location */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-yeti-blue transition-colors">
                {name}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({rating})</span>
            </div>

            {/* Quick info */}
            {(distance || altitude) && (
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                {distance && <span>{distance}</span>}
                {altitude && <span>{altitude}</span>}
              </div>
            )}

            {/* Price and availability */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div>
                <span className="text-2xl font-bold text-gray-900">NPR {price.toLocaleString()}</span>
                <span className="text-sm text-gray-600 ml-1">/ night</span>
              </div>
              <div className="text-right">
                <div className={`text-xs font-medium ${available ? 'text-green-600' : 'text-red-600'}`}>
                  {available ? 'Available' : 'Booked'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default HomestayCard