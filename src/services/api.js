// API 服務層 - 統一管理所有 API 請求

const API_BASE_URL = '/api'

// 通用 fetch 函數
const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
}

// 產品相關 API
export const productsAPI = {
  // 取得所有產品
  getAll: async () => {
    const data = await fetchAPI('products.json')
    return data.products
  },
  
  // 取得單一產品
  getById: async (id) => {
    const data = await fetchAPI('products.json')
    return data.products.find(product => product.id === id)
  },
  
  // 依分類取得產品
  getByCategory: async (category) => {
    const data = await fetchAPI('products.json')
    return data.products.filter(product => product.category === category)
  }
}

// 新聞相關 API
export const newsAPI = {
  // 取得所有新聞
  getAll: async () => {
    const data = await fetchAPI('news.json')
    return data.news
  },
  
  // 取得單一新聞
  getById: async (id) => {
    const data = await fetchAPI('news.json')
    return data.news.find(news => news.id === parseInt(id))
  },
  
  // 取得精選新聞
  getFeatured: async () => {
    const data = await fetchAPI('news.json')
    return data.news.filter(news => news.featured)
  },
  
  // 取得分類
  getCategories: async () => {
    const data = await fetchAPI('news.json')
    return data.categories
  },
  
  // 依分類取得新聞
  getByCategory: async (category) => {
    const data = await fetchAPI('news.json')
    return data.news.filter(news => news.category === category)
  }
}

// 合作夥伴相關 API
export const partnersAPI = {
  // 取得所有合作夥伴
  getAll: async () => {
    const data = await fetchAPI('partners.json')
    return data.partners
  },
  
  // 取得單一合作夥伴
  getById: async (id) => {
    const data = await fetchAPI('partners.json')
    return data.partners.find(partner => partner.id === parseInt(id))
  },
  
  // 取得客戶見證
  getTestimonials: async () => {
    const data = await fetchAPI('partners.json')
    return data.testimonials
  },
  
  // 取得統計資料
  getStatistics: async () => {
    const data = await fetchAPI('partners.json')
    return data.statistics
  },
  
  // 依分類取得合作夥伴
  getByCategory: async (category) => {
    const data = await fetchAPI('partners.json')
    return data.partners.filter(partner => partner.category === category)
  }
}

// 建置實績相關 API
export const portfolioAPI = {
  // 取得所有專案
  getAll: async () => {
    const data = await fetchAPI('portfolio.json')
    return data.projects
  },
  
  // 取得單一專案
  getById: async (id) => {
    const data = await fetchAPI('portfolio.json')
    return data.projects.find(project => project.id === parseInt(id))
  },
  
  // 取得精選專案
  getFeatured: async () => {
    const data = await fetchAPI('portfolio.json')
    return data.projects.filter(project => project.featured)
  },
  
  // 取得分類
  getCategories: async () => {
    const data = await fetchAPI('portfolio.json')
    return data.categories
  },
  
  // 依分類取得專案
  getByCategory: async (category) => {
    const data = await fetchAPI('portfolio.json')
    return data.projects.filter(project => project.category === category)
  }
}

// 公司資訊相關 API
export const companyAPI = {
  // 取得公司資訊
  getInfo: async () => {
    const data = await fetchAPI('company.json')
    return data.company
  },
  
  // 取得聯絡資訊
  getContact: async () => {
    const data = await fetchAPI('company.json')
    return data.company.contact
  },
  
  // 取得統計資料
  getStatistics: async () => {
    const data = await fetchAPI('company.json')
    return data.company.statistics
  },
  
  // 取得核心價值
  getValues: async () => {
    const data = await fetchAPI('company.json')
    return data.company.values
  }
}

// 表單提交 API (模擬)
export const formsAPI = {
  // 提交聯絡表單
  submitContact: async (formData) => {
    // 模擬 API 請求
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form submitted:', formData)
        resolve({
          success: true,
          message: '感謝您的來信!我們會盡快與您聯繫。',
          data: formData
        })
      }, 1000)
    })
  },
  
  // 提交諮詢表單
  submitInquiry: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Inquiry form submitted:', formData)
        resolve({
          success: true,
          message: '我們已收到您的諮詢，專員將盡快與您聯繫。',
          data: formData
        })
      }, 1000)
    })
  }
}

export default {
  products: productsAPI,
  news: newsAPI,
  partners: partnersAPI,
  portfolio: portfolioAPI,
  company: companyAPI,
  forms: formsAPI
}
