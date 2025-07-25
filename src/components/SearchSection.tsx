import { useState } from 'react'
import { Calendar, Users, Search } from 'lucide-react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar as CalendarComponent } from './ui/calendar'
import { format } from 'date-fns'
import { cn } from '../lib/utils'

const SearchSection = () => {
  const [province, setProvince] = useState('koshi')
  const [district, setDistrict] = useState('ilam')
  const [municipality, setMunicipality] = useState('ilam-municipality')
  const [ward, setWard] = useState('1')
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [travelers, setTravelers] = useState(2)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const provinces = [
    { value: 'koshi', label: 'Koshi Province' },
    { value: 'madhesh', label: 'Madhesh Province' },
    { value: 'bagmati', label: 'Bagmati Province' },
    { value: 'gandaki', label: 'Gandaki Province' },
    { value: 'lumbini', label: 'Lumbini Province' },
    { value: 'karnali', label: 'Karnali Province' },
    { value: 'sudurpashchim', label: 'Sudurpashchim Province' },
  ]

  const districts = {
    koshi: [
      { value: 'ilam', label: 'Ilam District' },
      { value: 'jhapa', label: 'Jhapa District' },
      { value: 'morang', label: 'Morang District' },
      { value: 'sunsari', label: 'Sunsari District' },
      { value: 'dhankuta', label: 'Dhankuta District' },
    ]
  }

  const municipalities = {
    ilam: [
      { value: 'ilam-municipality', label: 'Ilam Municipality' },
      { value: 'deumai', label: 'Deumai Municipality' },
      { value: 'mai', label: 'Mai Municipality' },
      { value: 'suryodaya', label: 'Suryodaya Municipality' },
    ]
  }

  const wards = Array.from({ length: 15 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `Ward No: ${i + 1}`
  }))

  const filterOptions = [
    { id: 'peaceful', label: 'Peaceful', icon: '🏔️' },
    { id: 'student-friendly', label: 'Student Friendly', icon: '🎓' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'tea-garden', label: 'Tea Garden', icon: '🍃' },
    { id: 'wifi', label: 'Wifi', icon: '📶' },
  ]

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <div className="bg-gradient-to-r from-yeti-blue to-yeti-blue-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Location Selector */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Province</label>
              <Select value={province} onValueChange={setProvince}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((prov) => (
                    <SelectItem key={prov.value} value={prov.value}>
                      {prov.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">District</label>
              <Select value={district} onValueChange={setDistrict}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {districts[province as keyof typeof districts]?.map((dist) => (
                    <SelectItem key={dist.value} value={dist.value}>
                      {dist.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Municipality</label>
              <Select value={municipality} onValueChange={setMunicipality}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {municipalities[district as keyof typeof municipalities]?.map((mun) => (
                    <SelectItem key={mun.value} value={mun.value}>
                      {mun.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Ward</label>
              <Select value={ward} onValueChange={setWard}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {wards.map((w) => (
                    <SelectItem key={w.value} value={w.value}>
                      {w.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date and Travelers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Travelers</label>
              <Select value={travelers.toString()} onValueChange={(value) => setTravelers(parseInt(value))}>
                <SelectTrigger className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1} {i === 0 ? 'Traveler' : 'Travelers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-3 block">Experience Type</label>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedFilters.includes(filter.id)
                      ? 'bg-yeti-blue text-white border-yeti-blue'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-yeti-blue hover:text-yeti-blue'
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <Button className="bg-nepal-red hover:bg-nepal-red/90 text-white px-8 py-3 text-lg font-semibold">
              <Search className="mr-2 h-5 w-5" />
              Search Homestays
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection