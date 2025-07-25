import React, { useState } from 'react';
import { Grid, List, SlidersHorizontal, ArrowUpDown, Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import HomestayCard from './HomestayCard';

const HomestayResults = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [altitudeRange, setAltitudeRange] = useState([500, 3000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  // Real homestay data with Unsplash images
  const homestays = [
    {
      id: 1,
      name: "Himalayan Heritage Homestay",
      location: "Ilam Municipality, Ward No: 1",
      rating: 4.8,
      price: 2500,
      image: "https://images.unsplash.com/photo-1693257845093-86e05bf9c09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Mountain View", "Organic Garden", "Traditional Cuisine", "Tea Plantation Access", "Wifi", "Cultural Experience"],
      availability: "available" as const,
      distance: "2km from main road",
      altitude: "1,200m"
    },
    {
      id: 2,
      name: "Tea Garden Paradise",
      location: "Ilam Municipality, Ward No: 3",
      rating: 4.6,
      price: 1800,
      image: "https://images.unsplash.com/photo-1722072328637-a96e1967ae50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRlYSUyMGdhcmRlbiUyMGhvdXNlJTIwdHJhZGl0aW9uYWx8ZW58MHwwfHx8MTc1MzQwOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Tea Plantation Access", "Organic Garden", "Bird Watching", "Photography Spots", "Traditional Cuisine"],
      availability: "available" as const,
      distance: "500m from main road",
      altitude: "1,000m"
    },
    {
      id: 3,
      name: "Mountain View Retreat",
      location: "Deumai Municipality, Ward No: 2",
      rating: 4.9,
      price: 3200,
      image: "https://images.unsplash.com/photo-1655922709404-68856f4e0a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Mountain View", "Hiking Trails", "Cultural Experience", "Traditional Cuisine", "Photography Spots", "Forest View"],
      availability: "booked" as const,
      distance: "5km from main road",
      altitude: "1,800m"
    },
    {
      id: 4,
      name: "Peaceful Valley Homestay",
      location: "Mai Municipality, Ward No: 1",
      rating: 4.7,
      price: 2100,
      image: "https://images.unsplash.com/photo-1540358276675-862c8417a331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Mountain View", "Organic Garden", "Bird Watching", "Traditional Cuisine", "Wifi"],
      availability: "available" as const,
      distance: "1km from main road",
      altitude: "1,400m"
    },
    {
      id: 5,
      name: "Traditional Gurung House",
      location: "Suryodaya Municipality, Ward No: 4",
      rating: 4.5,
      price: 1600,
      image: "https://images.unsplash.com/photo-1650713293721-28ef2657f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw2fHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Cultural Experience", "Traditional Cuisine", "Hiking Trails", "Mountain View", "Photography Spots"],
      availability: "available" as const,
      distance: "3km from main road",
      altitude: "1,600m"
    },
    {
      id: 6,
      name: "Misty Mountain Lodge",
      location: "Phakphokthum Rural Municipality, Ward No: 2",
      rating: 4.8,
      price: 2800,
      image: "https://images.unsplash.com/photo-1677130146432-96e8201aa663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Mountain View", "Forest View", "Bird Watching", "Hiking Trails", "Photography Spots", "Traditional Cuisine"],
      availability: "available" as const,
      distance: "8km from main road",
      altitude: "2,200m"
    },
    {
      id: 7,
      name: "Eco-Friendly Farm Stay",
      location: "Chulachuli Rural Municipality, Ward No: 1",
      rating: 4.4,
      price: 1400,
      image: "https://images.unsplash.com/photo-1723277260789-79a439ec5991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw5fHxOZXBhbCUyMGhvbWVzdGF5JTIwdHJhZGl0aW9uYWwlMjBob3VzZSUyMG1vdW50YWluJTIwdmlld3xlbnwwfDB8fHwxNzUzNDA5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Organic Garden", "Traditional Cuisine", "Cultural Experience", "Forest View", "Wifi"],
      availability: "available" as const,
      distance: "1.5km from main road",
      altitude: "900m"
    },
    {
      id: 8,
      name: "Sunrise View Homestay",
      location: "Mai Jogmai Rural Municipality, Ward No: 3",
      rating: 4.6,
      price: 2000,
      image: "https://images.unsplash.com/photo-1660241589132-8aaa99bfc259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMHx8TmVwYWwlMjBob21lc3RheSUyMHRyYWRpdGlvbmFsJTIwaG91c2UlMjBtb3VudGFpbiUyMHZpZXd8ZW58MHwwfHx8MTc1MzQwOTM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Mountain View", "Photography Spots", "Traditional Cuisine", "Tea Plantation Access", "Bird Watching"],
      availability: "available" as const,
      distance: "4km from main road",
      altitude: "1,500m"
    }
  ];

  const amenities = [
    'High-speed Wifi', 'Basic Wifi', 'Private Room', 'Shared Room', 'Private Bathroom',
    'Shared Bathroom', '24/7 Electricity', 'Solar Power', 'Running Water', 'Well Water'
  ];

  const activities = [
    'Traditional Dance', 'Local Festivals', 'Handicraft Workshops', 'Bird Watching',
    'Hiking', 'Tea Garden Tours', 'Organic Farming', 'Language Exchange',
    'Cooking Classes', 'Traditional Skills', 'Rock Climbing', 'River Activities'
  ];

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'p-0' : 'w-80 bg-white rounded-xl shadow-lg p-6'} space-y-6`}>
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Price Range (NPR per night)</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          min={500}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>NPR {priceRange[0].toLocaleString()}</span>
          <span>NPR {priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Altitude Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Altitude Range</h3>
        <Slider
          value={altitudeRange}
          onValueChange={setAltitudeRange}
          max={3000}
          min={500}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>{altitudeRange[0]}m</span>
          <span>{altitudeRange[1]}m</span>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Amenities</h3>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedAmenities([...selectedAmenities, amenity]);
                  } else {
                    setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
                  }
                }}
              />
              <label htmlFor={amenity} className="text-sm text-gray-700 cursor-pointer">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Activities</h3>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {activities.map((activity) => (
            <div key={activity} className="flex items-center space-x-2">
              <Checkbox
                id={activity}
                checked={selectedActivities.includes(activity)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedActivities([...selectedActivities, activity]);
                  } else {
                    setSelectedActivities(selectedActivities.filter(a => a !== activity));
                  }
                }}
              />
              <label htmlFor={activity} className="text-sm text-gray-700 cursor-pointer">
                {activity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setPriceRange([500, 5000]);
          setAltitudeRange([500, 3000]);
          setSelectedAmenities([]);
          setSelectedActivities([]);
        }}
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Homestays in Ilam</h2>
          <p className="text-gray-600">Discover authentic Nepalese hospitality • {homestays.length} properties found</p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterSidebar isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Results */}
        <div className="flex-1">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {homestays.map((homestay) => (
              <HomestayCard key={homestay.id} {...homestay} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Homestays
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayResults;