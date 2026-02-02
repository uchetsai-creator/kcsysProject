import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import companyInfo from '../api/company.json'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('contact.success'))
    console.log('表單資料:', formData)
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 聯絡資訊 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.contactInfo')}</h2>
            
            <div className="space-y-6">
              {/* 地址 */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-blue-600">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contact.address')}</h3>
                  <p className="text-gray-600">
                    {companyInfo.company.contact.address.full}
                  </p>
                </div>
              </div>

              {/* 電話 */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-blue-600">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">{t('footer.companyPhone')}</h3>
                  <p className="text-gray-600">
                    {companyInfo.company.contact.phone}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {t('contact.businessHours')}: {t('contact.weekday')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-blue-600">✉️</div>
                <div>
                  <h3 className="font-semibold mb-1">{t('footer.email')}</h3>
                  <p className="text-gray-600">
                    {companyInfo.company.contact.email}
                  </p>
                </div>
              </div>

              {/* 傳真 */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-blue-600">📠</div>
                <div>
                  <h3 className="font-semibold mb-1">{t('footer.fax')}</h3>
                  <p className="text-gray-600">
                    {companyInfo.company.contact.fax}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 聯絡表單 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              {/* 電話 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              {/* 公司名稱 */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              {/* 訊息 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* 送出按鈕 */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
