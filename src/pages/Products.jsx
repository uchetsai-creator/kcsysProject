import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { productsAPI } from '../services/api'

function Products() {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const data = await productsAPI.getAll()
      setProducts(data)
    } catch (err) {
      setError(t('productsPage.loadError'))
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">{t('productsPage.loading')}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadProducts}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            {t('productsPage.reload')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('productsPage.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('productsPage.subtitle')}
          </p>
        </div>

        {/* 產品分類導覽 */}
        <div className="mb-12">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">{t('productsPage.categories')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products.map((product) => (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className="flex flex-col items-center p-3 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105"
                >
                  <span className="text-3xl mb-2">{product.icon}</span>
                  <span className="text-xs text-center text-gray-700">{product.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 產品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* 產品圖示區塊 */}
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
              </div>

              {/* 產品資訊 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{product.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{product.shortDesc}</p>

                {/* 主要功能 (顯示前3個) */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('productsPage.mainFeatures')}:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={`/products/${product.id}`}
                  className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition font-semibold"
                >
                  {t('productsPage.learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 區塊 */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t('productsPage.notFound')}</h2>
          <p className="text-xl mb-6">
            {t('productsPage.customDev')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('productsPage.contactUs')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
