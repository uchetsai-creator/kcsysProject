import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { productsAPI } from '../services/api'

function ProductDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProduct()
  }, [id])

  const loadProduct = async () => {
    try {
      setLoading(true)
      const productData = await productsAPI.getById(id)
      setProduct(productData)
      
      const allProducts = await productsAPI.getAll()
      const related = allProducts.filter(p => p.id !== id).slice(0, 3)
      setRelatedProducts(related)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('productDetail.notFound')}</h2>
        <Link to="/products" className="text-primary hover:underline">{t('productDetail.backToList')}</Link>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{product.icon}</div>
          <h1 className="text-4xl font-bold text-primary mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600">{product.shortDesc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t('productDetail.productIntro')}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">{t('productDetail.mainFeatures')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg shadow-lg p-6 mb-6 sticky top-20">
              <h3 className="text-xl font-bold mb-4">{t('productDetail.interested')}</h3>
              <p className="mb-6 text-blue-100">{t('productDetail.contactPrompt')}</p>
              <Link to="/contact" className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                {t('productDetail.consultNow')}
              </Link>
              <div className="mt-6 pt-6 border-t border-primary-light">
                <p className="text-sm text-blue-100 mb-2">📞 {t('productDetail.hotline')}</p>
                <p className="font-semibold text-lg">04-2265 6615</p>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">{t('productDetail.relatedProducts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all group">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
