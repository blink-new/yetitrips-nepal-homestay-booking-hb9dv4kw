import { useState } from 'react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const Header = () => {
  const [activeTab, setActiveTab] = useState('homestays')

  const navigationItems = [
    { id: 'homestays', label: 'Homestays', active: true },
    { id: 'hotels', label: 'Hotels', active: false },
    { id: 'flights', label: 'Flights', active: false },
    { id: 'cars', label: 'Cars', active: false },
    { id: 'packages', label: 'Packages', active: false },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-yeti-blue to-yeti-blue-light bg-clip-text text-transparent">
                  Yeti
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-nepal-red to-nepal-blue bg-clip-text text-transparent">
                  Trips
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              List your property
            </Button>
            <Button variant="ghost" className="text-sm">
              Support
            </Button>
            <Button variant="outline" className="text-sm">
              Login
            </Button>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex space-x-8 border-b">
          <TooltipProvider>
            {navigationItems.map((item) => (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => item.active && setActiveTab(item.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      item.active
                        ? activeTab === item.id
                          ? 'border-yeti-blue text-yeti-blue'
                          : 'border-transparent text-gray-500 hover:text-yeti-blue hover:border-gray-300'
                        : 'border-transparent text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                    disabled={!item.active}
                  >
                    {item.label}
                  </button>
                </TooltipTrigger>
                {!item.active && (
                  <TooltipContent>
                    <p>Coming Soon</p>
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}

export default Header