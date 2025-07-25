import { useState } from 'react'
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Slider } from './ui/slider'
import { Checkbox } from './ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Separator } from './ui/separator'
import HomestayCard from './HomestayCard'

const HomestayResults = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([500, 5000])
  const [altitudeRange, setAltitudeRange] = useState([500, 3000])

  // Sample homestay data
  const homestays = [
    {
      id: '1',
      name: 'Mountain View Homestay',
      location: 'Ilam Municipality, Ward No: 1',
      rating: 4.8,
      price: 2500,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      features: ['Mountain View', 'Organic Garden', 'Traditional Cuisine', 'Wifi'],
      available: true,
      distance: '2km from main road',
      altitude: '1,200m'
    },
    {
      id: '2',
      name: 'Tea Garden Paradise',
      location: 'Ilam Municipality, Ward No: 3',
      rating: 4.6,
      price: 1800,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
      features: ['Tea Plantation Access', 'Bird Watching', 'Hiking Trails'],
      available: true,
      distance: '500m from main road',
      altitude: '1,000m'
    },
    {
      id: '3',
      name: 'Cultural Heritage Home',
      location: 'Deumai Municipality, Ward No: 2',
      rating: 4.9,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop',
      features: ['Cultural Experience', 'Traditional Cuisine', 'Photography Spots'],
      available: false,
      distance: '1km from main road',
      altitude: '1,500m'
    },
    {
      id: '4',
      name: 'Peaceful Valley Retreat',
      location: 'Mai Municipality, Ward No: 1',
      rating: 4.7,
      price: 2200,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
      features: ['Mountain View', 'Organic Garden', 'Wifi', 'Hiking Trails'],
      available: true,
      distance: '3km from main road',
      altitude: '1,800m'
    },
    {
      id: '5',
      name: 'Sunrise Homestay',
      location: 'Suryodaya Municipality, Ward No: 4',
      rating: 4.5,
      price: 1500,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      features: ['Mountain View', 'Bird Watching', 'Photography Spots'],
      available: true,
      distance: '1.5km from main road',
      altitude: '900m'
    },
    {
      id: '6',
      name: 'Organic Farm Stay',
      location: 'Ilam Municipality, Ward No: 5',
      rating: 4.8,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400&h=300&fit=crop',
      features: ['Organic Garden', 'Traditional Cuisine', 'Cultural Experience', 'Tea Plantation Access'],
      available: true,
      distance: '800m from main road',
      altitude: '1,300m'
    }
  ]

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range (NPR per night)</h3>
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

      <Separator />

      {/* Altitude Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Altitude Range</h3>
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

      <Separator />

      {/* Room Types */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Room Types</h3>
        <div className="space-y-2">
          {['Private room', 'Shared room', 'Entire house'].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-sm text-gray-700">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
        <div className="space-y-2">
          {['High-speed wifi', 'Traditional Nepali meals', 'Organic food', 'Laundry service'].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={amenity} />
              <label htmlFor={amenity} className="text-sm text-gray-700">{amenity}</label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Activities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Activities</h3>
        <div className="space-y-2">
          {['Hiking', 'Bird watching', 'Tea garden tours', 'Cultural workshops', 'Photography'].map((activity) => (
            <div key={activity} className="flex items-center space-x-2">
              <Checkbox id={activity} />
              <label htmlFor={activity} className="text-sm text-gray-700">{activity}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Featured Homestays in Ilam</h1>
          <p className="text-gray-600 mt-1">Discover authentic Nepalese hospitality</p>
          <p className="text-sm text-gray-500 mt-2">{homestays.length} homestays found</p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Sort */}
          <Select defaultValue="recommended">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="bg-white rounded-lg border p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <Button variant="ghost" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
            <FilterSidebar />
          </div>
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
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              Load More Homestays
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomestayResults