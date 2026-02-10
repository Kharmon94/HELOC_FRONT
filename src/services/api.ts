import type { AuthResponse, ApiError, User } from '../types'

const TOKEN_KEY = 'heloc_token'

function getBaseUrl(): string {
  return import.meta.env.VITE_API_URL ?? 'http://localhost:3001'
}

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

async function request<T>(
  path: string,
  options: RequestInit & { body?: unknown } = {}
): Promise<T> {
  const { body, ...rest } = options
  const url = `${getBaseUrl()}${path}`
  const headers: HeadersInit = {
    ...(rest.headers as Record<string, string>),
  }
  if (body !== undefined && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
  }
  const token = getToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  const res = await fetch(url, {
    ...rest,
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err: ApiError = data?.errors ? { errors: data.errors } : { error: data?.error ?? data?.message ?? 'Request failed' }
    throw new Error(Array.isArray(err.errors) ? err.errors.join(', ') : (err.error ?? err.message ?? 'Request failed'))
  }
  return data as T
}

class ApiService {
  setToken(token: string) {
    setToken(token)
  }

  clearToken() {
    clearToken()
  }

  getToken() {
    return getToken()
  }

  async getCurrentUser(): Promise<User | null> {
    const token = getToken()
    if (!token) return null
    try {
      const data = await request<{ user: User }>('/api/v1/auth/me')
      return data.user
    } catch {
      clearToken()
      return null
    }
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    const data = await request<AuthResponse>('/api/v1/auth/sign_in', {
      method: 'POST',
      body: { email, password },
    })
    setToken(data.token)
    return data
  }

  async signUp(email: string, password: string, password_confirmation: string): Promise<AuthResponse> {
    const data = await request<AuthResponse>('/api/v1/auth/sign_up', {
      method: 'POST',
      body: { email, password, password_confirmation },
    })
    setToken(data.token)
    return data
  }

  async getUsers() {
    return request<{ users: User[] }>('/api/v1/users')
  }

  async getUser(id: number) {
    return request<{ user: User }>(`/api/v1/users/${id}`)
  }

  async getAdminDashboard() {
    return request<{ message: string; user_id: number }>('/api/v1/admin/dashboard')
  }
}

export const apiService = new ApiService()
