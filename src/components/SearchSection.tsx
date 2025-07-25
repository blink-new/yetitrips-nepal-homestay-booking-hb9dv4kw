import React, { useState } from 'react';
import { Calendar, Users, MapPin, ChevronDown, Search, Mountain, GraduationCap, Book, Leaf, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const SearchSection = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    province: 'Koshi Province',
    district: 'Ilam District',
    municipality: 'Ilam Municipality',
    ward: 'Ward No: 1'
  });
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const provinces = [
    'Koshi Province', 'Madhesh Province', 'Bagmati Province', 'Gandaki Province',
    'Lumbini Province', 'Karnali Province', 'Sudurpashchim Province'
  ];

  const districts = {
    'Koshi Province': [
      'Ilam District', 'Jhapa District', 'Morang District', 'Sunsari District',
      'Dhankuta District', 'Terhathum District', 'Sankhuwasabha District',
      'Bhojpur District', 'Solukhumbu District', 'Okhaldhunga District',
      'Khotang District', 'Udayapur District', 'Taplejung District', 'Panchthar District'
    ]
  };

  const municipalities = {
    'Ilam District': [
      'Ilam Municipality', 'Deumai Municipality', 'Mai Municipality', 'Suryodaya Municipality',
      'Phakphokthum Rural Municipality', 'Chulachuli Rural Municipality',
      'Mai Jogmai Rural Municipality', 'Mangsebung Rural Municipality',
      'Rong Rural Municipality', 'Sandakpur Rural Municipality'
    ]
  };

  const wards = Array.from({ length: 15 }, (_, i) => `Ward No: ${i + 1}`);

  const experienceFilters = [
    { id: 'peaceful', label: 'Peaceful', icon: Mountain },
    { id: 'student', label: 'Student Friendly', icon: GraduationCap },
    { id: 'education', label: 'Education', icon: Book },
    { id: 'tea', label: 'Tea Garden', icon: Leaf },
    { id: 'wifi', label: 'Wifi', icon: Wifi },
  ];

  const LocationCard = ({ title, value, options, onSelect, placeholder }: any) => (
    <Popover>
      <PopoverTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-2 hover:border-yeti-blue/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                <p className="text-lg font-semibold text-gray-900 truncate">{value}</p>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="max-h-60 overflow-y-auto">
          {options.map((option: string) => (
            <button
              key={option}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => onSelect(option)}
            >
              <span className="font-medium text-gray-900">{option}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );

  const DateCard = ({ title, value, onChange, placeholder }: any) => (
    <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-2 hover:border-yeti-blue/30">
      <CardContent className="p-4">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <input
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="text-lg font-semibold text-gray-900 bg-transparent border-none outline-none w-full cursor-pointer"
              placeholder={placeholder}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const TravelersCard = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-2 hover:border-yeti-blue/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <Users className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Travelers</p>
                  <p className="text-lg font-semibold text-gray-900">{travelers} Travelers</p>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 ml-2" />
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="start">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">Travelers</span>
          <div className="flex items-center space-x-3">
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
              onClick={() => setTravelers(Math.max(1, travelers - 1))}
              disabled={travelers <= 1}
            >
              -
            </button>
            <span className="w-8 text-center font-semibold">{travelers}</span>
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
              onClick={() => setTravelers(Math.min(10, travelers + 1))}
              disabled={travelers >= 10}
            >
              +
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Authentic
            <span className="bg-gradient-to-r from-nepal-red to-yeti-blue bg-clip-text text-transparent"> Nepal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience traditional Nepalese hospitality in beautiful homestays across the Himalayas
          </p>
        </div>

        {/* Search Cards */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          {/* Location Selection */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-yeti-blue mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Where do you want to stay?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <LocationCard
                title="Province"
                value={selectedLocation.province}
                options={provinces}
                onSelect={(value: string) => setSelectedLocation(prev => ({ ...prev, province: value }))}
              />
              <LocationCard
                title="District"
                value={selectedLocation.district}
                options={districts[selectedLocation.province as keyof typeof districts] || []}
                onSelect={(value: string) => setSelectedLocation(prev => ({ ...prev, district: value }))}
              />
              <LocationCard
                title="Municipality"
                value={selectedLocation.municipality}
                options={municipalities[selectedLocation.district as keyof typeof municipalities] || []}
                onSelect={(value: string) => setSelectedLocation(prev => ({ ...prev, municipality: value }))}
              />
              <LocationCard
                title="Ward"
                value={selectedLocation.ward}
                options={wards}
                onSelect={(value: string) => setSelectedLocation(prev => ({ ...prev, ward: value }))}
              />
            </div>
          </div>

          {/* Date and Travelers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <DateCard
              title="Check-in"
              value={checkIn}
              onChange={setCheckIn}
              placeholder="Pick a date"
            />
            <DateCard
              title="Check-out"
              value={checkOut}
              onChange={setCheckOut}
              placeholder="Pick a date"
            />
            <TravelersCard />
          </div>

          {/* Experience Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What kind of experience are you looking for?</h3>
            <div className="flex flex-wrap gap-3">
              {experienceFilters.map((filter) => {
                const Icon = filter.icon;
                const isSelected = selectedFilters.includes(filter.id);
                return (
                  <button
                    key={filter.id}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-yeti-blue bg-yeti-blue text-white shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-yeti-blue/50 hover:bg-blue-50'
                    }`}
                    onClick={() => {
                      setSelectedFilters(prev =>
                        isSelected
                          ? prev.filter(f => f !== filter.id)
                          : [...prev, filter.id]
                      );
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-nepal-red to-yeti-blue hover:from-nepal-red/90 hover:to-yeti-blue/90 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Search className="w-5 h-5 mr-2" />
              Search Homestays
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;