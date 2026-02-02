import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function News() {
  const { t } = useTranslation()
  const newsItems = [
    {
      id: 1,
      title: t('news.items.mobilePOS.title'),
      date: '2024-03-15',
      category: t('news.categories.productUpdate'),
      image: '/images/news/mobile-pos.jpg',
      excerpt: t('news.items.mobilePOS.excerpt'),
      content: t('news.items.mobilePOS.content'),
      tags: t('news.items.mobilePOS.tags', { returnObjects: true })
    },
    {
      id: 2,
      title: t('news.items.siteminder.title'),
      date: '2024-02-20',
      category: t('news.categories.systemIntegration'),
      image: '/images/news/siteminder.jpg',
      excerpt: t('news.items.siteminder.excerpt'),
      content: t('news.items.siteminder.content'),
      tags: t('news.items.siteminder.tags', { returnObjects: true })
    },
    {
      id: 3,
      title: t('news.items.memberSystem.title'),
      date: '2024-01-10',
      category: t('news.categories.productUpdate'),
      image: '/images/news/member-system.jpg',
      excerpt: t('news.items.memberSystem.excerpt'),
      content: t('news.items.memberSystem.content'),
      tags: t('news.items.memberSystem.tags', { returnObjects: true })
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('news.title')}</h1>
          <p className="text-xl text-gray-600">{t('news.subtitle')}</p>
        </div>

        {/* 新聞列表 */}
        <div className="space-y-8">
          {newsItems.map((news) => (
            <article 
              key={news.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="md:flex">
                {/* 圖片 */}
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>
                </div>

                {/* 內容 */}
                <div className="md:w-2/3 p-8">
                  {/* 分類標籤 */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>

                  {/* 標題 */}
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:text-primary-dark transition">
                    {news.title}
                  </h2>

                  {/* 摘要 */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {news.excerpt}
                  </p>

                  {/* 標籤 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 閱讀更多 */}
                  <Link
                    to={`/news/${news.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition"
                  >
                    {t('news.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分頁 */}
        <div className="mt-12 flex justify-center">
          <nav className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              {t('news.prevPage')}
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              2
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              3
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              {t('news.nextPage')}
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
