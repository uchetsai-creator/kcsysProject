import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Breadcrumbs() {
  const { t } = useTranslation()
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // 路徑名稱對照表
  const pathNameMap = {
    'products': t('breadcrumbs.products'),
    'news': t('breadcrumbs.news'),
    'about': t('breadcrumbs.about'),
    'partners': t('breadcrumbs.partners'),
    'portfolio': t('breadcrumbs.portfolio'),
    'contact': t('breadcrumbs.contact'),
    'hotel-pms': t('products.hotelPms'),
    'restaurant-pos': t('products.restaurantPos'),
    'procurement': t('products.procurement'),
    'booking-system': t('products.bookingSystem'),
    'member-management': t('products.memberManagement'),
    'hr-management': t('products.hrManagement'),
    'financial-management': t('products.financialManagement'),
    'maintenance': t('products.maintenance'),
    'ticketing': t('products.ticketing'),
    'integration': t('products.integration'),
    'mobile-solution': t('products.mobileSolution'),
    'e-commerce': t('products.eCommerce')
  }

  if (pathnames.length === 0) return null

  return (
    <nav className="bg-gray-50 py-3 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              {t('breadcrumbs.home')}
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const displayName = pathNameMap[path] || path

            return (
              <li key={path} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="text-gray-800 font-medium">{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumbs
