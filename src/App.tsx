import { useState, useEffect } from 'react'
import type { PageId } from './types'
import type { User } from './types'
import type { SurveyPayload } from './types'
import { apiService } from './services/api'
import { canViewAdmin } from './utils/permissions'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { HomePage } from './components/home-page'
import { WhyHelocsPage } from './components/why-helocs-page'
import { AboutPage } from './components/about-page'
import { ContactPage } from './components/contact-page'
import { CalculatorsPage } from './components/calculators-page'
import { PartnersPage } from './components/partners-page'
import { SurveyPage } from './components/survey-page'
import { ResultsPage } from './components/results-page'
import { AdminDashboard } from './components/admin-dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')
  const [user, setUser] = useState<User | null>(null)
  const [surveyData, setSurveyData] = useState<SurveyPayload | null>(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    apiService.getCurrentUser().then((u) => {
      setUser(u)
      setAuthChecked(true)
    })
  }, [])

  const onNavigate = (page: PageId) => {
    if (page === 'admin' && !canViewAdmin(user)) return
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'why-helocs':
        return <WhyHelocsPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'calculators':
        return <CalculatorsPage />
      case 'partners':
        return <PartnersPage />
      case 'survey':
        return (
          <SurveyPage
            onNavigate={onNavigate}
            onSubmit={(data) => {
              setSurveyData(data)
              setCurrentPage('results')
            }}
          />
        )
      case 'results':
        return surveyData ? (
          <ResultsPage onNavigate={onNavigate} surveyData={surveyData} />
        ) : (
          <HomePage />
        )
      case 'admin':
        return <AdminDashboard onNavigate={onNavigate} />
      default:
        return <HomePage />
    }
  }

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer />
    </div>
  )
}

export default App
