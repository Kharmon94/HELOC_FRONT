export type UserType = 'user' | 'admin'

export interface User {
  id: number
  email: string
  admin: boolean
}

export interface AuthResponse {
  token: string
  user: User
}

export interface ApiError {
  error?: string
  message?: string
  errors?: string[]
}

export interface SurveyPayload {
  home_value: number
  mortgage_balance: number
  credit_score: string
  property_type: string
  use_of_funds: string
  timeframe: string
  first_name: string
  last_name: string
  email: string
  phone: string
  zip_code: string
}

export type PageId =
  | 'home'
  | 'why-helocs'
  | 'about'
  | 'contact'
  | 'calculators'
  | 'partners'
  | 'survey'
  | 'results'
  | 'admin'
