import  partners  from '../api/partners.json'
import { useTranslation } from 'react-i18next'

function Partners() {
  const { t } = useTranslation()
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('partners.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* 合作夥伴統計 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-700">{t('partners.stats.partners')}</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700">{t('partners.stats.experience')}</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-700">{t('partners.stats.satisfaction')}</div>
          </div>
        </div>

        {/* 主要合作夥伴 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('partners.mainPartners')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  {/* 這裡可以放實際的 logo 圖片 */}
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-gray-400 text-xs">LOGO</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 成功案例 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('partners.successStories')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  🏨
                </div>
                <div>
                <h3 className="text-xl font-bold">{t('partners.stories.hotel.name')}</h3>
                <p className="text-sm text-gray-600">{t('partners.stories.hotel.system')}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {t('partners.stories.hotel.description')}
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-4">📈 {t('partners.stories.hotel.efficiency')}</span>
              <span>⭐ {t('partners.stories.hotel.satisfaction')}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                🍽️
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('partners.stories.restaurant.name')}</h3>
                <p className="text-sm text-gray-600">{t('partners.stories.restaurant.system')}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {t('partners.stories.restaurant.description')}
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-4">💰 {t('partners.stories.restaurant.cost')}</span>
              <span>⚡ {t('partners.stories.restaurant.speed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 客戶評價 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">{t('partners.testimonials')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {t('partners.reviews.hotel.quote')}
              </p>
              <p className="text-sm text-gray-600">{t('partners.reviews.hotel.author')}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {t('partners.reviews.restaurant.quote')}
              </p>
              <p className="text-sm text-gray-600">{t('partners.reviews.restaurant.author')}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {t('partners.reviews.enterprise.quote')}
              </p>
              <p className="text-sm text-gray-600">{t('partners.reviews.enterprise.author')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t('partners.cta.title')}</h2>
          <p className="text-xl mb-6">
            {t('partners.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('partners.cta.button')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
