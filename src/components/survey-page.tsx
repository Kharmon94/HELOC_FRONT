import type { SurveyPayload } from '../types'

interface SurveyPageProps {
  onNavigate: (page: import('../types').PageId) => void
  onSubmit: (data: SurveyPayload) => void
}

export function SurveyPage({ onNavigate, onSubmit }: SurveyPageProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data: SurveyPayload = {
      home_value: Number((form.querySelector('[name="home_value"]') as HTMLInputElement)?.value) || 500000,
      mortgage_balance: Number((form.querySelector('[name="mortgage_balance"]') as HTMLInputElement)?.value) || 250000,
      credit_score: '',
      property_type: '',
      use_of_funds: '',
      timeframe: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      zip_code: '',
    }
    onSubmit(data)
    onNavigate('results')
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Survey</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Home value</label>
          <input name="home_value" type="number" defaultValue={500000} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mortgage balance</label>
          <input name="mortgage_balance" type="number" defaultValue={250000} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <button type="submit" className="rounded bg-brand-blue px-4 py-2 text-white">Continue to results</button>
      </form>
    </main>
  )
}
