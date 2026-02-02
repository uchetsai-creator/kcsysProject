import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* 產品圖示 */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {product.icon}
        </div>
      </div>

      {/* 產品資訊 */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.shortDesc}
        </p>

        {/* 主要功能預覽 */}
        <div className="mb-4">
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 查看更多按鈕 */}
        <Link
          to={`/products/${product.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          了解更多
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
