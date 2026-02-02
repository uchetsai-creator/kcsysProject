import { useTranslation } from 'react-i18next'

function Portfolio() {
  const { t } = useTranslation()
  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.hotel.title'),
      category: t('portfolio.categories.hotelManagement'),
      client: t('portfolio.projects.hotel.client'),
      year: '2023',
      description: t('portfolio.projects.hotel.description'),
      results: t('portfolio.projects.hotel.results', { returnObjects: true }),
      technologies: t('portfolio.projects.hotel.technologies', { returnObjects: true }),
      image: '/images/portfolio/hotel-project.jpg'
    },
    {
      id: 2,
      title: t('portfolio.projects.restaurant.title'),
      category: t('portfolio.categories.restaurantManagement'),
      client: t('portfolio.projects.restaurant.client'),
      year: '2024',
      description: t('portfolio.projects.restaurant.description'),
      results: t('portfolio.projects.restaurant.results', { returnObjects: true }),
      technologies: t('portfolio.projects.restaurant.technologies', { returnObjects: true }),
      image: '/images/portfolio/pos-project.jpg'
    },
    {
      id: 3,
      title: t('portfolio.projects.mall.title'),
      category: t('portfolio.categories.systemIntegration'),
      client: t('portfolio.projects.mall.client'),
      year: '2023',
      description: t('portfolio.projects.mall.description'),
      results: t('portfolio.projects.mall.results', { returnObjects: true }),
      technologies: t('portfolio.projects.mall.technologies', { returnObjects: true }),
      image: '/images/portfolio/integration-project.jpg'
    },
    {
      id: 4,
      title: t('portfolio.projects.tourism.title'),
      category: t('portfolio.categories.ticketingManagement'),
      client: t('portfolio.projects.tourism.client'),
      year: '2022',
      description: t('portfolio.projects.tourism.description'),
      results: t('portfolio.projects.tourism.results', { returnObjects: true }),
      technologies: t('portfolio.projects.tourism.technologies', { returnObjects: true }),
      image: '/images/portfolio/ticket-project.jpg'
    },
    {
      id: 5,
      title: t('portfolio.projects.manufacturing.title'),
      category: t('portfolio.categories.enterpriseManagement'),
      client: t('portfolio.projects.manufacturing.client'),
      year: '2023',
      description: t('portfolio.projects.manufacturing.description'),
      results: t('portfolio.projects.manufacturing.results', { returnObjects: true }),
      technologies: t('portfolio.projects.manufacturing.technologies', { returnObjects: true }),
      image: '/images/portfolio/erp-project.jpg'
    },
    {
      id: 6,
      title: t('portfolio.projects.fitness.title'),
      category: t('portfolio.categories.memberManagement'),
      client: t('portfolio.projects.fitness.client'),
      year: '2024',
      description: t('portfolio.projects.fitness.description'),
      results: t('portfolio.projects.fitness.results', { returnObjects: true }),
      technologies: t('portfolio.projects.fitness.technologies', { returnObjects: true }),
      image: '/images/portfolio/fitness-project.jpg'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('portfolio.title')}</h1>
          <p className="text-xl text-gray-600">{t('portfolio.subtitle')}</p>
        </div>

        {/* 統計數據 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">{t('portfolio.stats.projects')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">{t('portfolio.stats.experience')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">{t('portfolio.stats.satisfaction')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">{t('portfolio.stats.support')}</div>
          </div>
        </div>

        {/* 專案列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              {/* 專案圖片 */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>

              {/* 專案資訊 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

                {/* 成果 */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">{t('portfolio.projectResults')}:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t('portfolio.cta.title')}</h2>
          <p className="text-xl mb-6">
            {t('portfolio.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('portfolio.cta.button')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
