import React from 'react';
import { Star, MapPin, Users, Wifi, Mountain, Leaf, Camera, Utensils, TreePine, Bird, Footprints } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface HomestayCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  features: string[];
  availability: 'available' | 'booked';
  distance: string;
  altitude: string;
}

const HomestayCard: React.FC<HomestayCardProps> = ({
  name,
  location,
  rating,
  price,
  image,
  features,
  availability,
  distance,
  altitude,
}) => {
  const getFeatureIcon = (feature: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'Mountain View': Mountain,
      'Organic Garden': Leaf,
      'Traditional Cuisine': Utensils,
      'Tea Plantation Access': Leaf,
      'Cultural Experience': Camera,
      'Hiking Trails': Footprints,
      'Bird Watching': Bird,
      'Photography Spots': Camera,
      'Wifi': Wifi,
      'Forest View': TreePine,
    };
    return iconMap[feature] || Mountain;
  };

  const getFeatureColor = (feature: string) => {
    const colorMap: { [key: string]: string } = {
      'Mountain View': 'bg-blue-500',
      'Organic Garden': 'bg-green-500',
      'Traditional Cuisine': 'bg-orange-500',
      'Tea Plantation Access': 'bg-emerald-600',
      'Cultural Experience': 'bg-purple-500',
      'Hiking Trails': 'bg-gray-600',
      'Bird Watching': 'bg-yellow-500',
      'Photography Spots': 'bg-red-500',
      'Wifi': 'bg-indigo-500',
      'Forest View': 'bg-green-600',
    };
    return colorMap[feature] || 'bg-blue-500';
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
      <div className="relative">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Availability Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              className={`${
                availability === 'available'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-red-500 hover:bg-red-600'
              } text-white font-semibold px-3 py-1`}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${
                availability === 'available' ? 'bg-green-200' : 'bg-red-200'
              } animate-pulse`} />
              {availability === 'available' ? 'Available' : 'Booked'}
            </Badge>
          </div>

          {/* Feature Chips */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[calc(100%-120px)]">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = getFeatureIcon(feature);
              const colorClass = getFeatureColor(feature);
              return (
                <Badge
                  key={index}
                  className={`${colorClass} text-white text-xs font-medium px-2 py-1 flex items-center space-x-1 backdrop-blur-sm bg-opacity-90`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{feature}</span>
                </Badge>
              );
            })}
            {features.length > 3 && (
              <Badge className="bg-black/70 text-white text-xs font-medium px-2 py-1 backdrop-blur-sm">
                +{features.length - 3} more
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">NPR {price.toLocaleString()}</div>
                <div className="text-sm text-gray-600">per night</div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Title and Location */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yeti-blue transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-900">{rating}</span>
            <span className="ml-1 text-sm text-gray-500">(127 reviews)</span>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-gray-400" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center">
              <Mountain className="w-4 h-4 mr-1 text-gray-400" />
              <span>{altitude}</span>
            </div>
          </div>

          {/* All Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {features.slice(3).map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-yeti-blue to-blue-600 hover:from-yeti-blue/90 hover:to-blue-600/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Details
          </button>
        </CardContent>
      </div>
    </Card>
  );
};

export default HomestayCard;