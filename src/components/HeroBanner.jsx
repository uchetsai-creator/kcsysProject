import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import  companyInfo  from '../api/company.json'


function HeroBanner() {
  const { t } = useTranslation()
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* 背景裝飾 - 模擬建築物輪廓 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-dark transform skew-x-6"></div>
      </div>

      {/* 深藍色漸層疊加 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary-light/80"></div>
      
      {/* 內容 */}
      <div className="relative h-full flex items-center justify-center text-white text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.companyName')}
            <span className="text-accent">~~</span>
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-12 leading-relaxed">
            {t('hero.slogan')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg transform hover:-translate-y-1 text-lg"
            >
              {t('home.exploreProducts')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* 底部波浪裝飾 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroBanner
