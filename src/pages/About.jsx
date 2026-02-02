import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('about.subtitle')}
          </p>
        </div>

        {/* 公司簡介 */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">{t('about.companyIntro')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('about.companyDesc1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('about.companyDesc2')}
            </p>
          </div>
        </section>

        {/* 核心價值 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.coreValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.professional')}</h3>
              <p className="text-gray-600">
                {t('about.professionalDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.integrity')}</h3>
              <p className="text-gray-600">
                {t('about.integrityDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.innovation')}</h3>
              <p className="text-gray-600">
                {t('about.innovationDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.quality')}</h3>
              <p className="text-gray-600">
                {t('about.qualityDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* 團隊介紹 */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.ourTeam')}</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              {t('about.teamDesc')}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
