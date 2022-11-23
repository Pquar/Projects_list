export function Navbar() {
    return (
        <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
      
            <div className="flex space-x-4">
              <div>
                <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m5 7c-1-3-6-8 0-13 6-2 7 3 7 5 0 0 1 1-1 3 0 4 0 3 2 4 1 1 2 1 2 1 2 2 2 1 3 3l-17 0 4-3m5-4-5 4" />
                  </svg>
                  <span className="font-bold">Home</span>
                </a>
              </div>
      
              <div className="hidden md:flex items-center space-x-1">
                <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">ODS</a>
              </div>
            </div>
      
          
            <div className="hidden md:flex items-center space-x-1">
              <a href="/newTopic" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">novo Topics</a>
            </div>
      
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
      
          </div>
        </div>
      
        <div className="mobile-menu hidden md:hidden">
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
        </div>
      </nav>
    );
  }