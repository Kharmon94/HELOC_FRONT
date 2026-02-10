import type { SurveyPayload } from '../types'

interface ResultsPageProps {
  onNavigate: (page: import('../types').PageId) => void
  surveyData: SurveyPayload
}

export function ResultsPage({ onNavigate, surveyData }: ResultsPageProps) {
  const equity = (surveyData.home_value || 0) - (surveyData.mortgage_balance || 0)
  const availableCash = Math.floor(equity * 0.85)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Your Results</h1>
      <p className="mt-4 text-gray-600">
        Based on your profile, you could access up to ${availableCash.toLocaleString()} in home equity.
      </p>
      <button
        type="button"
        onClick={() => onNavigate('partners')}
        className="mt-6 rounded bg-brand-blue px-4 py-2 text-white"
      >
        View All Partners
      </button>
    </main>
  )
}
