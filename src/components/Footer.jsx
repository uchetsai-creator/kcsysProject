import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import  companyInfo  from '../api/company.json'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司資訊 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xl">KC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.company.englishName}</h3>
                <p className="text-sm text-blue-200">{companyInfo.company.name}</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-light pb-2">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition flex items-center">
                  <span className="mr-2">→</span> {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-100 hover:text-white transition flex items-center">
                  <span className="mr-2">→</span> {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-blue-100 hover:text-white transition flex items-center">
                  <span className="mr-2">→</span> {t('nav.partners')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-100 hover:text-white transition flex items-center">
                  <span className="mr-2">→</span> {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-blue-100 hover:text-white transition flex items-center">
                  <span className="mr-2">→</span> {t('nav.news')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-light pb-2">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">📍</span>
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.companyAddress')}</div>
                  <span className="text-blue-100">{companyInfo.company.address}</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">📞</span>
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.companyPhone')}</div>
                  <span className="text-blue-100">{companyInfo.company.phone}</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">📠</span>
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.fax')}</div>
                  <span className="text-blue-100">{companyInfo.company.fax}</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">✉️</span>
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.email')}</div>
                  <a href={`mailto:${companyInfo.company.email}`} className="text-blue-100 hover:text-accent transition">
                    {companyInfo.company.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-light text-center">
          <p className="text-sm text-blue-200">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
