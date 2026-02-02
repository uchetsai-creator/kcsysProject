import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HeroBanner from '../components/HeroBanner'

function Home() {
  const { t } = useTranslation()
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* 核心價值 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t('home.whyChooseUs')}</h2>
            <p className="text-xl text-gray-600">{t('home.whyChooseUsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('home.professionalExperience')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.professionalExperienceDesc')}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('home.technicalLeadership')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.technicalLeadershipDesc')}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('home.customService')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.customServiceDesc')}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('home.comprehensiveSupport')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.comprehensiveSupportDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 產品總覽 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t('home.productIntroduction')}</h2>
            <p className="text-xl text-gray-600">{t('home.productIntroductionSubtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* 產品圖示 */}
            <Link to="/products/hotel-pms" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🏨</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.hotelPms')}</span>
            </Link>

            <Link to="/products/restaurant-pos" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🍽️</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.restaurantPos')}</span>
            </Link>

            <Link to="/products/procurement" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🛒</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.procurement')}</span>
            </Link>

            <Link to="/products/booking-system" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">📅</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.bookingSystem')}</span>
            </Link>

            <Link to="/products/member-management" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">👤</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.memberManagement')}</span>
            </Link>

            <Link to="/products/hr-management" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">👥</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.hrManagement')}</span>
            </Link>

            <Link to="/products/financial-management" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">💰</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.financialManagement')}</span>
            </Link>

            <Link to="/products/maintenance" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🔧</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.maintenance')}</span>
            </Link>

            <Link to="/products/ticketing" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🎫</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.ticketing')}</span>
            </Link>

            <Link to="/products/integration" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">⚙️</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.integration')}</span>
            </Link>

            <Link to="/products/mobile-solution" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">📱</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.mobileSolution')}</span>
            </Link>

            <Link to="/products/e-commerce" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🚚</div>
              <span className="text-sm font-semibold text-gray-700 text-center">{t('products.eCommerce')}</span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
            >
              {t('home.viewAllProducts')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.readyToStart')}</h2>
          <p className="text-xl mb-10 opacity-90">
            {t('home.readyToStartDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('home.contactNow')}
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              {t('home.exploreProducts')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
