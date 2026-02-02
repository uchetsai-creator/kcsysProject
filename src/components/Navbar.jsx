import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import  companyInfo  from '../api/company.json'


function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xl">KC</span>
              </div>
              <span className="text-white text-xl font-bold hidden md:block">
                {companyInfo.name}
              </span>
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <button
              onClick={() => changeLanguage('zh-TW')}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                i18n.language === 'zh-TW' ? 'bg-white text-primary' : 'text-white hover:bg-primary-light'
              }`}
            >
              中
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                i18n.language === 'en' ? 'bg-white text-primary' : 'text-white hover:bg-primary-light'
              }`}
            >
              EN
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link 
              to="/" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">🏠</span>
              {t('nav.home')}
            </Link>
            
            <Link 
              to="/news" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">📰</span>
              {t('nav.news')}
            </Link>

            <Link 
              to="/about" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">ℹ️</span>
              {t('nav.about')}
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                <span className="mr-2">💼</span>
                {t('nav.products')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 transition-all duration-200 ${
                  isProductOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  <span className="font-semibold">{t('nav.productOverview')}</span>
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link to="/products/hotel-pms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🏨 {t('products.hotelPms')}
                </Link>
                <Link to="/products/restaurant-pos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🍽️ {t('products.restaurantPos')}
                </Link>
                <Link to="/products/procurement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🛒 {t('products.procurement')}
                </Link>
                <Link to="/products/booking-system" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  📅 {t('products.bookingSystem')}
                </Link>
                <Link to="/products/member-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  👤 {t('products.memberManagement')}
                </Link>
                <Link to="/products/hr-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  👥 {t('products.hrManagement')}
                </Link>
                <Link to="/products/financial-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  💰 {t('products.financialManagement')}
                </Link>
                <Link to="/products/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🔧 {t('products.maintenance')}
                </Link>
                <Link to="/products/ticketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🎫 {t('products.ticketing')}
                </Link>
                <Link to="/products/integration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  ⚙️ {t('products.integration')}
                </Link>
                <Link to="/products/mobile-solution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  📱 {t('products.mobileSolution')}
                </Link>
                <Link to="/products/e-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🚚 {t('products.eCommerce')}
                </Link>
              </div>
            </div>

            <Link 
              to="/partners" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">🤝</span>
              {t('nav.partners')}
            </Link>

            <Link 
              to="/portfolio" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">🏗️</span>
              {t('nav.portfolio')}
            </Link>

            <Link 
              to="/contact" 
              className="text-white hover:bg-primary-light px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <span className="mr-2">📞</span>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Language Switcher */}
          <div className="md:hidden flex items-center space-x-2 mr-2">
            <button
              onClick={() => changeLanguage('zh-TW')}
              className={`px-2 py-1 rounded text-xs font-medium transition ${
                i18n.language === 'zh-TW' ? 'bg-white text-primary' : 'text-white hover:bg-primary-light'
              }`}
            >
              中
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-medium transition ${
                i18n.language === 'en' ? 'bg-white text-primary' : 'text-white hover:bg-primary-light'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-light focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              🏠 {t('nav.home')}
            </Link>
            <Link to="/news" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              📰 {t('nav.news')}
            </Link>
            <Link to="/about" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              ℹ️ {t('nav.about')}
            </Link>
            
            <div className="border-t border-primary-light pt-2 mt-2">
              <div className="px-3 py-2 text-white font-semibold text-sm">{t('nav.products')}</div>
              <Link to="/products" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                {t('nav.productOverview')}
              </Link>
              <Link to="/products/hotel-pms" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                🏨 {t('products.hotelPms')}
              </Link>
              <Link to="/products/restaurant-pos" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                🍽️ {t('products.restaurantPos')}
              </Link>
              <Link to="/products/procurement" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                🛒 {t('products.procurement')}
              </Link>
            </div>

            <Link to="/partners" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              🤝 {t('nav.partners')}
            </Link>
            <Link to="/portfolio" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              🏗️ {t('nav.portfolio')}
            </Link>
            <Link to="/contact" className="block text-white hover:bg-primary-light px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              📞 {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
